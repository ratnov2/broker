import axios from 'axios'
import { useQuery } from 'react-query'

import { IInvoice } from './invoices-sent/invoices.interface'
import { ITransfer } from './transfer-history/transfer.interface'

export const useBalance = (currentPage: number) => {
	const { isLoading: isLoadingTransfers, data: transfers } = useQuery(
		'transferHistory',
		() =>
			axios.get<ITransfer[]>(
				'https://639b978b31877e43d68f9e9e.mockapi.io/transfers'
			),
		{
			select: ({ data }) => data
		}
	)

	const { isLoading: isLoadingInvoices, data: invoices } = useQuery(
		'invoicesSent',
		() =>
			axios.get<IInvoice[]>(
				'https://639b978b31877e43d68f9e9e.mockapi.io/invoices'
			),
		{
			select: ({ data }) => data.slice(0, 7)
		}
	)

	return { isLoadingTransfers, transfers, isLoadingInvoices, invoices }
}
