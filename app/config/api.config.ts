export const API_URL = process.env.NEXT_PUBLIC_API_URL
	? process.env.NEXT_PUBLIC_API_URL
	: 'http://localhost:4200'
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getInvoicesUrl = (
	string?: string,
	page?: number,
	perPage?: number
) => `/invoices${string}?page=${page}&perPage=${perPage}`

export const getTransactionsUrl = (
	page?: number,
	perPage?: number,
	orderBy?: string
) => `/transactions?page=${page}&perPage=${perPage}&orderBy=${orderBy}`