import { UseFormRegister } from 'react-hook-form'

import { ITransaction } from '../new-transaction.interface'

export interface ITransactionInput {
	title?: string
	errors?: any
	fieldId:
		| 'id'
		| 'createdAt'
		| 'sender'
		| 'recipient'
		| 'invoice'
		| 'pin'
		| 'amount'
		| 'service'
		| 'dueDate'
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
		| 'id'
		| 'createdAt'
		| 'sender'
		| 'recipient'
		| 'invoice'
		| 'pin'
		| 'amount'
		| 'service'
		| 'dueDate'
	type?: 'password' | 'email' | 'text'
	isDisabled: boolean
}
