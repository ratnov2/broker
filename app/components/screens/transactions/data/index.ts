import { ITransaction } from './../TransactionType'

export const TransactionFormDefault: ITransaction = {
	number: '',
	date: '',
	recipient: '',
	email: '',
	amount: 0,
	services: '',
	dueDate: '',
	pin: ''
}

export type TransactionInputType = {
	title?: string
	name: any
	options?: any
}

export const TransactionInputs: TransactionInputType[] = [
	{
		title: 'Transaction number',
		name: 'number',
		options: {
			required: 'Number required',
			disabled: true
		}
	},
	{
		title: 'Date',
		name: 'date',
		options: {
			required: 'Date required',
			disabled: true
		}
	},
	{
		title: 'Recipient',
		name: 'recipient',
		options: {
			required: 'Recipient required',
			minLength: 1
		}
	},
	{
		title: 'Email',
		name: 'email',
		options: {
			required: 'Email required',
			minLength: 1
		}
	},
	{
		title: 'Amount',
		name: 'amount',
		options: {
			required: 'Amount required',
			minLength: 1
		}
	},
	{
		title: 'Services',
		name: 'services',
		options: {
			required: 'Services required',
			minLength: 1
		}
	},
	{
		title: 'Due date',
		name: 'dueDate',
		options: {
			required: 'Due date required',
			minLength: 6
		}
	},
	{
		title: 'Due date',
		name: 'pin',
		options: {
			required: 'Pin required',
			minLength: 3
		}
	}
]
