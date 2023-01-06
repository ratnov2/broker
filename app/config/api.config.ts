export const API_URL = process.env.NEXT_PUBLIC_API_URL
	? process.env.NEXT_PUBLIC_API_URL
	: 'http://localhost:4200'
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string: string) => `/auth${string}`

export const getIncomeAllUrl = '/statistics/income/all'
export const getExpenseAllUrl = '/statistics/expense/all'

export const getUserCardsUrl = '/bank-accounts/get-user-cards'
