import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { TransactionService } from '@/services/transactions/transactions.service'

export const useTransactions = (
	currentPage: number = 1,
	orderBy: string = 'desc'
) => {
	const [itemsPerPage, setItemsPerPage] = useState<number>(5)

	const { isLoading: isLoadingTransactions, data: transactions } = useQuery(
		['transactions', currentPage, itemsPerPage, orderBy],
		() => TransactionService.getAll(currentPage, itemsPerPage, orderBy),
		{
			select: ({ data }) => data
		}
	)

	return {
		isLoadingTransactions,
		transactions
	}
}
