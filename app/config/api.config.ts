import { STATISTICS_EXPENSE, STATISTICS_INCOME } from '@/config/constants'

export const API_URL =
	process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4200'

export const API_UPLOADS_URL =
	process.env.NEXT_PUBLIC_API_UPLOADS_URL || 'http://localhost:4200'

export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`

export const getUserProfile = (string: string) => `/users/profile`
export const getUsersUrl = '/users'

export const getIncomeByDynamicUrl = `${STATISTICS_INCOME}/dynamic`
export const getExpenseCategoriesUrl = `${STATISTICS_EXPENSE}/categories`
export const getProfileUrl = '/users/profile'

export const updateNewInvoiceUrl = 'invoices/'
export const getAllInvoicesUrl = 'invoices'

export const fileUrl = 'files/'
