import { ITransactionInput } from './transaction-input.interface'

export const TransactionInputs: ITransactionInput[] = [
	{
		title: 'Transaction number',
		name: 'number',
		options: {
			required: {
				value: true,
				message: 'Transaction number required'
			},
			disabled: true,
			value: '123456789'
		},
		placeholder: 'Transaction number'
	},
	{
		title: 'Date',
		name: 'date',
		options: {
			required: {
				value: true,
				message: 'Date number required'
			},
			disabled: true,
			value: '10.11.2022'
		},
		placeholder: 'Date'
	},
	{
		title: 'Recipient',
		name: 'recipient',
		options: {
			required: {
				value: true,
				message: 'Recipient number required!'
			},
			minLength: 1
		},
		placeholder: 'Recipient'
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
			minLength: 6,
			value: '11.12.2022'
		},
		type: 'date'
	},
	{
		title: 'Pin',
		name: 'pin',
		options: {
			required: 'Pin required',
			minLength: 3
		},
		type: 'password'
	}
]
