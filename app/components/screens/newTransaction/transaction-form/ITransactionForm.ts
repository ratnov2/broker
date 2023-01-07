import { SubmitHandler } from 'react-hook-form'

import { TransactionType } from '../transaction-type/TransactionType'

export interface ITransactionForm {
	onSubmit: SubmitHandler<TransactionType>
}
