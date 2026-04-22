import { z } from "zod"

import { clineMessageSchema, queuedMessageSchema, tokenUsageSchema } from "./message.js"
import { modelInfoSchema } from "./model.js"
import { toolNamesSchema, toolUsageSchema } from "./tool.js"

/**
 * ForgeFoxEventName
 */

export enum ForgeFoxEventName {
	// Task Provider Lifecycle
	TaskCreated = "taskCreated",

	// Task Lifecycle
	TaskStarted = "taskStarted",
	TaskCompleted = "taskCompleted",
	TaskAborted = "taskAborted",
	TaskFocused = "taskFocused",
	TaskUnfocused = "taskUnfocused",
	TaskActive = "taskActive",
	TaskInteractive = "taskInteractive",
	TaskResumable = "taskResumable",
	TaskIdle = "taskIdle",

	// Subtask Lifecycle
	TaskPaused = "taskPaused",
	TaskUnpaused = "taskUnpaused",
	TaskSpawned = "taskSpawned",
	TaskDelegated = "taskDelegated",
	TaskDelegationCompleted = "taskDelegationCompleted",
	TaskDelegationResumed = "taskDelegationResumed",

	// Task Execution
	Message = "message",
	TaskModeSwitched = "taskModeSwitched",
	TaskAskResponded = "taskAskResponded",
	TaskUserMessage = "taskUserMessage",
	QueuedMessagesUpdated = "queuedMessagesUpdated",

	// Task Analytics
	TaskTokenUsageUpdated = "taskTokenUsageUpdated",
	TaskToolFailed = "taskToolFailed",

	// Configuration Changes
	ModeChanged = "modeChanged",
	ProviderProfileChanged = "providerProfileChanged",

	// Query Responses
	CommandsResponse = "commandsResponse",
	ModesResponse = "modesResponse",
	ModelsResponse = "modelsResponse",

	// Evals
	EvalPass = "evalPass",
	EvalFail = "evalFail",
}

/**
 * ForgeFoxEvents
 */

export const forgeFoxEventsSchema = z.object({
	[ForgeFoxEventName.TaskCreated]: z.tuple([z.string()]),

	[ForgeFoxEventName.TaskStarted]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskCompleted]: z.tuple([
		z.string(),
		tokenUsageSchema,
		toolUsageSchema,
		z.object({
			isSubtask: z.boolean(),
		}),
	]),
	[ForgeFoxEventName.TaskAborted]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskFocused]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskUnfocused]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskActive]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskInteractive]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskResumable]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskIdle]: z.tuple([z.string()]),

	[ForgeFoxEventName.TaskPaused]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskUnpaused]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskSpawned]: z.tuple([z.string(), z.string()]),
	[ForgeFoxEventName.TaskDelegated]: z.tuple([
		z.string(), // parentTaskId
		z.string(), // childTaskId
	]),
	[ForgeFoxEventName.TaskDelegationCompleted]: z.tuple([
		z.string(), // parentTaskId
		z.string(), // childTaskId
		z.string(), // completionResultSummary
	]),
	[ForgeFoxEventName.TaskDelegationResumed]: z.tuple([
		z.string(), // parentTaskId
		z.string(), // childTaskId
	]),

	[ForgeFoxEventName.Message]: z.tuple([
		z.object({
			taskId: z.string(),
			action: z.union([z.literal("created"), z.literal("updated")]),
			message: clineMessageSchema,
		}),
	]),
	[ForgeFoxEventName.TaskModeSwitched]: z.tuple([z.string(), z.string()]),
	[ForgeFoxEventName.TaskAskResponded]: z.tuple([z.string()]),
	[ForgeFoxEventName.TaskUserMessage]: z.tuple([z.string()]),
	[ForgeFoxEventName.QueuedMessagesUpdated]: z.tuple([z.string(), z.array(queuedMessageSchema)]),

	[ForgeFoxEventName.TaskToolFailed]: z.tuple([z.string(), toolNamesSchema, z.string()]),
	[ForgeFoxEventName.TaskTokenUsageUpdated]: z.tuple([z.string(), tokenUsageSchema, toolUsageSchema]),

	[ForgeFoxEventName.ModeChanged]: z.tuple([z.string()]),
	[ForgeFoxEventName.ProviderProfileChanged]: z.tuple([z.object({ name: z.string(), provider: z.string() })]),

	[ForgeFoxEventName.CommandsResponse]: z.tuple([
		z.array(
			z.object({
				name: z.string(),
				source: z.enum(["global", "project", "built-in"]),
				filePath: z.string().optional(),
				description: z.string().optional(),
				argumentHint: z.string().optional(),
			}),
		),
	]),
	[ForgeFoxEventName.ModesResponse]: z.tuple([z.array(z.object({ slug: z.string(), name: z.string() }))]),
	[ForgeFoxEventName.ModelsResponse]: z.tuple([z.record(z.string(), modelInfoSchema)]),
})

export type ForgeFoxEvents = z.infer<typeof forgeFoxEventsSchema>

/**
 * TaskEvent
 */

export const taskEventSchema = z.discriminatedUnion("eventName", [
	// Task Provider Lifecycle
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskCreated),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskCreated],
		taskId: z.number().optional(),
	}),

	// Task Lifecycle
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskStarted),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskStarted],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskCompleted),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskCompleted],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskAborted),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskAborted],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskFocused),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskFocused],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskUnfocused),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskUnfocused],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskActive),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskActive],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskInteractive),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskInteractive],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskResumable),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskResumable],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskIdle),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskIdle],
		taskId: z.number().optional(),
	}),

	// Subtask Lifecycle
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskPaused),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskPaused],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskUnpaused),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskUnpaused],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskSpawned),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskSpawned],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskDelegated),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskDelegated],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskDelegationCompleted),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskDelegationCompleted],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskDelegationResumed),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskDelegationResumed],
		taskId: z.number().optional(),
	}),

	// Task Execution
	z.object({
		eventName: z.literal(ForgeFoxEventName.Message),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.Message],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskModeSwitched),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskModeSwitched],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskAskResponded),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskAskResponded],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.QueuedMessagesUpdated),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.QueuedMessagesUpdated],
		taskId: z.number().optional(),
	}),

	// Task Analytics
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskToolFailed),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskToolFailed],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.TaskTokenUsageUpdated),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.TaskTokenUsageUpdated],
		taskId: z.number().optional(),
	}),

	// Query Responses
	z.object({
		eventName: z.literal(ForgeFoxEventName.CommandsResponse),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.CommandsResponse],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.ModesResponse),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.ModesResponse],
		taskId: z.number().optional(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.ModelsResponse),
		payload: forgeFoxEventsSchema.shape[ForgeFoxEventName.ModelsResponse],
		taskId: z.number().optional(),
	}),

	// Evals
	z.object({
		eventName: z.literal(ForgeFoxEventName.EvalPass),
		payload: z.undefined(),
		taskId: z.number(),
	}),
	z.object({
		eventName: z.literal(ForgeFoxEventName.EvalFail),
		payload: z.undefined(),
		taskId: z.number(),
	}),
])

export type TaskEvent = z.infer<typeof taskEventSchema>
