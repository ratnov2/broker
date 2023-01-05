import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { TransactionService } from '@/services/transactions/transactions.service'

export const useTransactions = (currentPage: number) => {
	const [page, setPage] = useState<number>(1)
	const [perPage, setPerPage] = useState<number>(3)

	const { isLoading: isLoadingTransactions, data: transactions } = useQuery(
		['transactions', page, perPage],
		() => TransactionService.getAll(page, perPage),
		{
			select: ({ data }) => data
		}
	)

	return {
		isLoadingTransactions,
		transactions
	}
}
