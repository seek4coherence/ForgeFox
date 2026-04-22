// npx vitest run __tests__/delegation-events.spec.ts

import { ForgeFoxEventName, forgeFoxEventsSchema, taskEventSchema } from "@forgefox/types"

describe("delegation event schemas", () => {
	test("forgeFoxEventsSchema validates tuples", () => {
		expect(() => (forgeFoxEventsSchema.shape as any)[ForgeFoxEventName.TaskDelegated].parse(["p", "c"])).not.toThrow()
		expect(() =>
			(forgeFoxEventsSchema.shape as any)[ForgeFoxEventName.TaskDelegationCompleted].parse(["p", "c", "s"]),
		).not.toThrow()
		expect(() =>
			(forgeFoxEventsSchema.shape as any)[ForgeFoxEventName.TaskDelegationResumed].parse(["p", "c"]),
		).not.toThrow()

		// invalid shapes
		expect(() => (forgeFoxEventsSchema.shape as any)[ForgeFoxEventName.TaskDelegated].parse(["p"])).toThrow()
		expect(() =>
			(forgeFoxEventsSchema.shape as any)[ForgeFoxEventName.TaskDelegationCompleted].parse(["p", "c"]),
		).toThrow()
		expect(() => (forgeFoxEventsSchema.shape as any)[ForgeFoxEventName.TaskDelegationResumed].parse(["p"])).toThrow()
	})

	test("taskEventSchema discriminated union includes delegation events", () => {
		expect(() =>
			taskEventSchema.parse({
				eventName: ForgeFoxEventName.TaskDelegated,
				payload: ["p", "c"],
				taskId: 1,
			}),
		).not.toThrow()

		expect(() =>
			taskEventSchema.parse({
				eventName: ForgeFoxEventName.TaskDelegationCompleted,
				payload: ["p", "c", "s"],
				taskId: 1,
			}),
		).not.toThrow()

		expect(() =>
			taskEventSchema.parse({
				eventName: ForgeFoxEventName.TaskDelegationResumed,
				payload: ["p", "c"],
				taskId: 1,
			}),
		).not.toThrow()
	})
})
