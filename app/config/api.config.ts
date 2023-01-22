import { STATISTICS_EXPENSE, STATISTICS_INCOME } from '@/config/constants'

export const API_URL =
	process.env.NEXT_PUBLIC_API_URL ||
	'https://red-project-bank-app.herokuapp.com'

export const API_UPLOADS_URL =
	process.env.NEXT_PUBLIC_API_UPLOADS_URL ||
	'https://red-project-bank-app.herokuapp.com'

export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getFileUrl = (string: string) => `/files${string}`
export const getAccountsUrl = (
	string?: string,
	page?: number,
	perPage?: number
) => `/bank-accounts${string}?page=${page}&perPage=${perPage}`
export const getSavingsUrl = (string: string) => `/savings${string}`
export const getInvoicesUrl = (
	string?: string,
	page?: number,
	perPage?: number
) => `/invoices${string}?page=${page}&perPage=${perPage}`

export const getTransactionsUrl = (string?: string) => `/transactions${string}`

//export const getTransactionsUrl = (string: string) => `/transactions${string}`

export const getStatisticsUrl = (string: string) => `/statistics${string}`
export const getUserProfile = (string?: string) => `/users/profile${string}`
export const getUserUrl = (string?: string) => `/users${string}`
export const getUsersUrl = `/users`
export const getIncomeByDynamicUrl = `${STATISTICS_INCOME}/dynamic`
export const getExpenseCategoriesUrl = `${STATISTICS_EXPENSE}/categories`
export const getProfileUrl = `/users/profile`
export const updateNewInvoiceUrl = 'invoices/'
export const getAllInvoicesUrl = 'invoices'
export const fileUrl = 'files/'

export const getIncomeAllUrl = '/statistics/income/all'
export const getExpenseAllUrl = '/statistics/expense/all'

export const getUserCardsUrl = '/bank-accounts/get-user-cards'
