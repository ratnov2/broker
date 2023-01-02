import axios from 'axios'
import { useQuery } from 'react-query'

import { ILatestInvoice } from '@/shared/types/invoice.types'

//import { ILatestInvoice } from '@/screens/invoices/latest-invoices/rows/latest-invoices.interface';
import { IOverviewInvoice } from '@/screens/invoices/overview-invoices/overview-invoices.interface'
import { InvoiceService } from '@/services/invoices/invoice.service'

export const useInvoices = (currentPage?: number) => {
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

	const { isLoading: isLoadingLatestInvoices, data: latestInvoices } = useQuery(
		'invoices',
		() => InvoiceService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	// const { isLoading: isLoadingOverviewInvoices, data: overviewInvoices } =
	// 	useQuery(
	// 		'overviewInvoices',
	// 		() =>
	// 			InvoiceService.getStatistics(),
	// 		{
	// 			select: ({ data }) => data
	// 		}
	// 	)

	return {
		isLoadingOverviewInvoices,
		overviewInvoices,
		isLoadingLatestInvoices,
		latestInvoices
	}
}
