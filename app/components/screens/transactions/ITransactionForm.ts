import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

import { ITransaction } from './TransactionType'

export interface ITransactionForm {
	defaultData: ITransaction
	onSubmit?: (
		onValid: SubmitHandler<ITransaction>,
		onInvalid: SubmitErrorHandler<ITransaction>
	) => void | undefined
}
