export interface ITransactionInput {
	title?: string
	name:
		| 'number'
		| 'date'
		| 'recipient'
		| 'email'
		| 'amount'
		| 'dueDate'
		| 'services'
		| 'pin'
	options?: any
	placeholder?: string
	type?: string
}