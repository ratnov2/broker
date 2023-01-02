import { useQuery } from '@tanstack/react-query'

import { instance } from '@/api/interceptors'

import { IInvoice } from './invoices-sent/invoices.interface'
import { ITransfer } from './transfer-history/transfer.interface'

export const useBalance = () => {
	const {
		isLoading: isLoadingTransfers,
		data: transfers,
		refetch: refetchTransfers
	} = useQuery(
		['transferHistory'],
		() =>
			instance.get<ITransfer[]>(
				'https://red-project-bank-app.herokuapp.com/api/transactions'
			),
		{
			select: ({ data }) => data
		}
	)

	const { isLoading: isLoadingInvoices, data: invoices } = useQuery(
		['invoicesSent'],
		() =>
			instance.get<IInvoice[]>(
				'https://red-project-bank-app.herokuapp.com/api/invoices/by-sender'
			),
		{
			select: ({ data }) => data.slice(0, 7)
		}
	)

	return {
		isLoadingTransfers,
		transfers,
		isLoadingInvoices,
		invoices,
		refetchTransfers
	}
}
