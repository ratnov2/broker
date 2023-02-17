export const getContentType = () => ({
	'Content-Type': 'application/json',
	// 'Authorization': 'Client-ID 5unjKQT2GwrriTcCixzfIASi'
})

export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message
