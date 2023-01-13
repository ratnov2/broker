import { UseFormRegister } from 'react-hook-form'

import { ITransaction } from '../new-transaction.interface'

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
