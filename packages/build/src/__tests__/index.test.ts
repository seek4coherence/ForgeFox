// npx vitest run src/__tests__/index.test.ts

import { generatePackageJson } from "../index.js"

describe("generatePackageJson", () => {
	it("should be a test", () => {
		const generatedPackageJson = generatePackageJson({
			packageJson: {
				name: "forgefox",
				displayName: "%extension.displayName%",
				description: "%extension.description%",
				publisher: "ForgeFox",
				version: "3.17.2",
				icon: "assets/icons/icon.png",
				contributes: {
					viewsContainers: {
						activitybar: [
							{
								id: "forgefox-ActivityBar",
								title: "%views.activitybar.title%",
								icon: "assets/icons/icon.svg",
							},
						],
					},
					views: {
						"forgefox-ActivityBar": [
							{
								type: "webview",
								id: "forgefox.SidebarProvider",
								name: "",
							},
						],
					},
					commands: [
						{
							command: "forgefox.plusButtonClicked",
							title: "%command.newTask.title%",
							icon: "$(edit)",
						},
						{
							command: "forgefox.openInNewTab",
							title: "%command.openInNewTab.title%",
							category: "%configuration.title%",
						},
					],
					menus: {
						"editor/context": [
							{
								submenu: "forgefox.contextMenu",
								group: "navigation",
							},
						],
						"forgefox.contextMenu": [
							{
								command: "forgefox.addToContext",
								group: "1_actions@1",
							},
						],
						"editor/title": [
							{
								command: "forgefox.plusButtonClicked",
								group: "navigation@1",
								when: "activeWebviewPanelId == forgefox.TabPanelProvider",
							},
							{
								command: "forgefox.settingsButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == forgefox.TabPanelProvider",
							},
							{
								command: "forgefox.accountButtonClicked",
								group: "navigation@6",
								when: "activeWebviewPanelId == forgefox.TabPanelProvider",
							},
						],
					},
					submenus: [
						{
							id: "forgefox.contextMenu",
							label: "%views.contextMenu.label%",
						},
						{
							id: "forgefox.terminalMenu",
							label: "%views.terminalMenu.label%",
						},
					],
					configuration: {
						title: "%configuration.title%",
						properties: {
							"forgefox.allowedCommands": {
								type: "array",
								items: {
									type: "string",
								},
								default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
								description: "%commands.allowedCommands.description%",
							},
							"forgefox.customStoragePath": {
								type: "string",
								default: "",
								description: "%settings.customStoragePath.description%",
							},
						},
					},
				},
				scripts: {
					lint: "eslint **/*.ts",
				},
			},
			overrideJson: {
				name: "forgefox-nightly",
				displayName: "ForgeFox Nightly",
				publisher: "ForgeFox",
				version: "0.0.1",
				icon: "assets/icons/icon-nightly.png",
				scripts: {},
			},
			substitution: ["forgefox", "forgefox-nightly"],
		})

		expect(generatedPackageJson).toStrictEqual({
			name: "forgefox-nightly",
			displayName: "ForgeFox Nightly",
			description: "%extension.description%",
			publisher: "ForgeFox",
			version: "0.0.1",
			icon: "assets/icons/icon-nightly.png",
			contributes: {
				viewsContainers: {
					activitybar: [
						{
							id: "forgefox-nightly-ActivityBar",
							title: "%views.activitybar.title%",
							icon: "assets/icons/icon.svg",
						},
					],
				},
				views: {
					"forgefox-nightly-ActivityBar": [
						{
							type: "webview",
							id: "forgefox-nightly.SidebarProvider",
							name: "",
						},
					],
				},
				commands: [
					{
						command: "forgefox-nightly.plusButtonClicked",
						title: "%command.newTask.title%",
						icon: "$(edit)",
					},
					{
						command: "forgefox-nightly.openInNewTab",
						title: "%command.openInNewTab.title%",
						category: "%configuration.title%",
					},
				],
				menus: {
					"editor/context": [
						{
							submenu: "forgefox-nightly.contextMenu",
							group: "navigation",
						},
					],
					"forgefox-nightly.contextMenu": [
						{
							command: "forgefox-nightly.addToContext",
							group: "1_actions@1",
						},
					],
					"editor/title": [
						{
							command: "forgefox-nightly.plusButtonClicked",
							group: "navigation@1",
							when: "activeWebviewPanelId == forgefox-nightly.TabPanelProvider",
						},
						{
							command: "forgefox-nightly.settingsButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == forgefox-nightly.TabPanelProvider",
						},
						{
							command: "forgefox-nightly.accountButtonClicked",
							group: "navigation@6",
							when: "activeWebviewPanelId == forgefox-nightly.TabPanelProvider",
						},
					],
				},
				submenus: [
					{
						id: "forgefox-nightly.contextMenu",
						label: "%views.contextMenu.label%",
					},
					{
						id: "forgefox-nightly.terminalMenu",
						label: "%views.terminalMenu.label%",
					},
				],
				configuration: {
					title: "%configuration.title%",
					properties: {
						"forgefox-nightly.allowedCommands": {
							type: "array",
							items: {
								type: "string",
							},
							default: ["npm test", "npm install", "tsc", "git log", "git diff", "git show"],
							description: "%commands.allowedCommands.description%",
						},
						"forgefox-nightly.customStoragePath": {
							type: "string",
							default: "",
							description: "%settings.customStoragePath.description%",
						},
					},
				},
			},
			scripts: {},
		})
	})
})
