import { ITransaction } from '@/shared/types/transaction.types';
import { Dispatch, SetStateAction } from 'react';


export interface ITransactionHistory {
	transactions?: ITransaction[]
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}