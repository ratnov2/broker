const development = true
const production = false
export const API_URL = process.env.NEXT_PUBLIC_API_URL
	? process.env.NEXT_PUBLIC_API_URL
	: 'http://localhost:4200/api'
	
export const API_SERVER_URL = production ? `https://server-broke.onrender.com/api` : development ? `https://server.option-trading.ca/api` : `http://localhost:4200/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getPaymentUrl = (url:string)=> `/payment/${url}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getFileUrl = (string: string) => `/files${string}`
export const getAccountsUrl = (string: string) => `/bank-accounts${string}`
export const getSavingsUrl = (string: string) => `/savings${string}`
export const getTransactionsUrl = (string: string) => `/transactions${string}`
export const getStatisticsUrl = (string: string) => `/statistics${string}`
