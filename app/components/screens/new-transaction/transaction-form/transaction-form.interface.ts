import { SubmitHandler } from 'react-hook-form'

import { ITransaction } from '../new-transaction.interface'

export interface ITransactionForm {
	onSubmit: SubmitHandler<ITransaction>
}
