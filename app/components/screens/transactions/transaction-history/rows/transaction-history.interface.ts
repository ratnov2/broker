import { Dispatch, SetStateAction } from 'react'

import { ITransactions } from '@/shared/types/transaction.types'

export interface ITransactionHistory {
	transactions?: ITransactions
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}
