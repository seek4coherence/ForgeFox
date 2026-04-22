// ForgeFox: Cloud services disabled - posthog import kept for type compatibility but not initialized.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import posthog from "posthog-js"

import type { TelemetrySetting } from "@forgefox/types"

/**
 * ForgeFox: Cloud services disabled - coming soon.
 * PostHog telemetry is a complete no-op since ph.forgefox.com is not available.
 * The class interface is preserved to avoid breaking imports.
 */
class TelemetryClient {
	private static instance: TelemetryClient
	private static telemetryEnabled: boolean = false

	public updateTelemetryState(_telemetrySetting: TelemetrySetting, _apiKey?: string, _distinctId?: string) {
		// ForgeFox: Cloud services disabled - do not initialize PostHog.
		TelemetryClient.telemetryEnabled = false
	}

	public static getInstance(): TelemetryClient {
		if (!TelemetryClient.instance) {
			TelemetryClient.instance = new TelemetryClient()
		}

		return TelemetryClient.instance
	}

	public capture(_eventName: string, _properties?: Record<string, any>) {
		// ForgeFox: Cloud services disabled - telemetry capture is a no-op.
	}
}

export const telemetryClient = TelemetryClient.getInstance()
