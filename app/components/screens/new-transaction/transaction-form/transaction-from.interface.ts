import { UseFormRegister } from 'react-hook-form';



import { ITransaction } from '../new-transaction.interface';


export interface ITransactionInput {
	title?: string
	errors?: any
	fieldId:
		| 'number'
		| 'date'
		| 'recipient'
		| 'invoice'
		| 'pin'
		| 'amount'
		| 'service'
		| 'dueDate'
		| 'options'
		| `options.${string}`
	errorMsg?: string
	type?: 'password' | 'email' | 'text'
	placeholder: string
	register: UseFormRegister<ITransaction>
	isDisabled: boolean
}

export interface IArrayInputs {
	title: string
	placeholder: string
	fieldId:
		| 'number'
		| 'date'
		| 'recipient'
		| 'invoice'
		| 'pin'
		| 'amount'
		| 'service'
		| 'dueDate'
		| 'options'
		| `options.${string}`
	type?: 'password' | 'email' | 'text'
	isDisabled: boolean
}

export const ITransactionInputs: IArrayInputs[] = [
	{
		title: 'Transcation Number',
		placeholder: 'Transcation Number',
		fieldId: 'number',
		type: 'text',
		isDisabled: true
	},
	{
		title: 'Date',
		placeholder: 'Transaction date',
		fieldId: 'date',
		type: 'text',
		isDisabled: true
	},
	{
		title: 'Recipient',
		placeholder: 'Select Recipient..',
		fieldId: 'recipient',
		type: 'text',
		isDisabled: false
	},
	{
		title: 'Invoice',
		placeholder: 'Select invoice..',
		fieldId: 'invoice',
		type: 'text',
		isDisabled: false
	},
	{
		title: 'Amount',
		placeholder: 'Transaction amount',
		fieldId: 'amount',
		type: 'text',
		isDisabled: false
	},
	{
		title: 'Services',
		placeholder: 'Select service..',
		fieldId: 'service',
		type: 'text',
		isDisabled: false
	},
	{
		title: 'Due Date',
		placeholder: 'Select date',
		fieldId: 'dueDate',
		type: 'text',
		isDisabled: false
	},
	{
		title: 'Pin',
		placeholder: 'Your Pin',
		fieldId: 'pin',
		type: 'password',
		isDisabled: false
	}
]