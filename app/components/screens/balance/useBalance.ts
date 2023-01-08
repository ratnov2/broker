import { useQuery } from '@tanstack/react-query'

import { InvoicesService } from '@/services/invoices.service'
import { TransactionsService } from '@/services/transactions.service'

export const useBalance = (currentPage: number) => {
	const { isLoading: isLoadingTransfers, data: transfers } = useQuery(
		['get transfer history', currentPage],
		() => TransactionsService.getAll(currentPage),
		{
			select: ({ data }) => data
		}
	)

	const { isLoading: isLoadingInvoices, data: invoices } = useQuery(
		['get invoices by sender'],
		() => InvoicesService.getBySender(),
		{
			select: ({ data }) => data.slice(0, 7)
		}
	)

	return {
		isLoadingTransfers,
		transfers,
		isLoadingInvoices,
		invoices
	}
}
