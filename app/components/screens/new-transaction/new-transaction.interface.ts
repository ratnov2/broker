export interface ITransaction {
	number: string
	date: string
	recipient: string
	email: string
	amount: number
	service: string
	dueDate: string
	pin: string
	agreement: boolean
	invoice: number
	options?: any
}

export interface IDBTransaction {
	invoice: number
}