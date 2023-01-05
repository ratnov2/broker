import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

import { IOverviewInvoice } from '@/shared/types/invoice.types'

import { InvoiceService } from '@/services/invoices/invoice.service'

export const useInvoices = (currentPage: number = 1) => {
	const { isLoading: isLoadingOverviewInvoices, data: overviewInvoices } =
		useQuery(
			['overviewInvoices'],
			() =>
				axios.get<IOverviewInvoice[]>(
					'https://63a0724d24d74f9fe8387afc.mockapi.io/api/overview-invoices'
				),
			{
				select: ({ data }) => data
			}
		)

	const [itemsPerPage, setItemsPerPage] = useState<number>(5)
	const { isLoading: isLoadingLatestInvoices, data: latestInvoices } = useQuery(
		['invoices', currentPage, itemsPerPage],
		() => InvoiceService.getAll(currentPage, itemsPerPage),
		{
			select: ({ data }) => data
		}
	)

	// const { isLoading: isLoadingOverviewInvoices, data: overviewInvoices } =
	//  	useQuery(['overviewInvoices'], () => InvoiceService.getStatistics(), {
	// 			select: ({ data }) => data
	// 			// {
	//  			// const array = Object.entries(data)
	//  			// array.map(item => ({
	//  			// 	id: 1,
	//  			// 	amount2: item[0],
	//  			// 	overviewType: item[1]
	//  			// }))}
	//  	})

	return {
		isLoadingOverviewInvoices,
		overviewInvoices,
		isLoadingLatestInvoices,
		latestInvoices
	}
}
