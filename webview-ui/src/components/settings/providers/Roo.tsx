import { type ProviderSettings, type OrganizationAllowList, type RouterModels } from "@forgefox/types"

type RooProps = {
	apiConfiguration: ProviderSettings
	setApiConfigurationField: (field: keyof ProviderSettings, value: ProviderSettings[keyof ProviderSettings]) => void
	routerModels?: RouterModels
	cloudIsAuthenticated: boolean
	organizationAllowList: OrganizationAllowList
	modelValidationError?: string
	simplifySettings?: boolean
}

// ForgeFox: Cloud services disabled - coming soon.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Roo = (_props: RooProps) => {
	return (
		<div className="flex flex-col gap-3 p-3">
			<div className="text-sm font-semibold">ForgeFox Cloud Provider</div>
			<div className="text-sm text-vscode-descriptionForeground">
				ForgeFox Cloud is coming soon. This provider is not yet available. Please select a different provider
				(e.g., OpenAI, Anthropic, Google) to get started.
			</div>
		</div>
	)
}
