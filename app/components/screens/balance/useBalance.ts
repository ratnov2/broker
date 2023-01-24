import { useQuery } from '@tanstack/react-query'

import { InvoiceService } from '@/services/invoices/invoice.service'
import { TransactionService } from '@/services/transactions/transactions.service'

export const useBalance = (currentPage: number) => {
	const { isLoading: isLoadingTransfers, data: transfers } = useQuery(
		['get transfer history', currentPage],
		() => TransactionService.getAll(currentPage),
		{
			select: ({ data }) => data
		}
	)

	const { isLoading: isLoadingInvoices, data: invoices } = useQuery(
		['get invoices by sender'],
		() => InvoiceService.getBySender(),
		{
			select: ({ data }) => {
				return data.filter(invoice => invoice.recipientId !== null).slice(0, 7)
			}
		}
	)

	return {
		isLoadingTransfers,
		transfers,
		isLoadingInvoices,
		invoices
	}
}
