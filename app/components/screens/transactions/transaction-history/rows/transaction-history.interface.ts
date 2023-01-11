import { Dispatch, SetStateAction } from 'react'

import { ITransaction } from '@/shared/types/transaction.types'

export interface ITransactionHistory {
	transactions?: ITransaction[]
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}
