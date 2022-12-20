import axios from 'axios'
import { useQuery } from 'react-query'

import { ILatestInvoice } from '@/screens/invoices/latest-invoices/rows/latest-invoices.interface'
import { IOverviewInvoice } from '@/screens/invoices/overview-invoices/overview-invoices.interface'

export const useInvoices = (currentPage: number) => {
	const { isLoading: isLoadingOverviewInvoices, data: overviewInvoices } =
		useQuery(
			'overviewInvoices',
			() =>
				axios.get<IOverviewInvoice[]>(
					'https://63a0724d24d74f9fe8387afc.mockapi.io/api/overview-invoices'
				),
			{
				select: ({ data }) => data
			}
		)

	const { isLoading: isLoadingLatestInvoices, data: latestInvoices } =
		useQuery(
			'latestInvoices',
			() =>
				axios.get<ILatestInvoice[]>(
					'https://63a0724d24d74f9fe8387afc.mockapi.io/api/latest-invoices'
				),
			{
				select: ({ data }) => data //.slice(currentPage, 5)
			}
		)

	return {
		isLoadingOverviewInvoices,
		overviewInvoices,
		isLoadingLatestInvoices,
		latestInvoices
	}
}
