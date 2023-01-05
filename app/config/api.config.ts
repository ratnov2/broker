export const API_URL = `${process.env.APP_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getFileUrl = (string: string) => `/files${string}`
export const getAccountsUrl = (string: string) => `/bank-accounts${string}`
export const getSavingsUrl = (string: string) => `/savings${string}`
export const getInvoicesUrl = (string: string) => `/invoices${string}`

export const getTransactionsUrl = (page?: number, perPage?: number) =>
	`/transactions?page=${page}&perPage=${perPage}`

export const getStatisticsUrl = (string: string) => `/statistics${string}`
