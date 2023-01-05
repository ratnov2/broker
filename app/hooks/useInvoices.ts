import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';



import { InvoiceService } from '@/services/invoices/invoice.service';


export const useInvoices = (currentPage: number = 1) => {
	//  const { isLoading: isLoadingOverviewInvoices, data: overviewInvoices } =
	//  	useQuery(
	//  		['overviewInvoices'],
	//  		() =>
	//  			axios.get<IOverviewInvoice[]>(
	//  				'https://63a0724d24d74f9fe8387afc.mockapi.io/api/overview-invoices'
	//  			),
	//  		{
	//  			select: ({ data }) => data
	//  		}
	//  	)

	const [itemsPerPage, setItemsPerPage] = useState<number>(5)
	const { isLoading: isLoadingLatestInvoices, data: latestInvoices } = useQuery(
		['invoices', currentPage, itemsPerPage],
		() => InvoiceService.getAll(currentPage, itemsPerPage),
		{
			select: ({ data }) => data
		}
	)

	const { isLoading: isLoadingOverviewInvoices, data: overviewInvoices } =
		useQuery(['overviewInvoices'], () => InvoiceService.getStatistics(), {
			select: ({ data }) => {
				// const array = {
				// 	sent: 12,
				// 	paid: 0,
				// 	pending: 1,
				// 	unpaid: 0
				// }

				var result = Object.entries(data).map(key => ({
					id: 1,
					overviewType: key[0],
					amount: key[1]
				}))

				result.forEach((item, i) => {
					item.id = i + 1
				})

				console.log(result)
				return result
			}
		})

	// const array = {
	// 	sent: 12,
	// 	paid: 0,
	// 	pending: 1,
	// 	unpaid: 0
	// }

	// var result = Object.entries(array).map(key => ({
	// 	id: 1,
	// 	overviewType: key[0],
	// 	amount: key[1]
	// }))

	// result.forEach((item, i) => {
	// 	item.id = i + 1
	// })

	// console.log(result)

	return {
		isLoadingOverviewInvoices,
		overviewInvoices,
		isLoadingLatestInvoices,
		latestInvoices
	}
}