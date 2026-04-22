// ForgeFox: Cloud services disabled - coming soon.
// These URLs are placeholders since the cloud services are not yet available.
export const PRODUCTION_CLERK_BASE_URL = "https://clerk.forgefox.com"
export const PRODUCTION_FORGEFOX_API_URL = "https://app.forgefox.com"

export const getClerkBaseUrl = () => process.env.CLERK_BASE_URL || PRODUCTION_CLERK_BASE_URL

export const getForgeFoxApiUrl = () => process.env.FORGEFOX_API_URL || PRODUCTION_FORGEFOX_API_URL
