import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { InvoiceService } from '@/services/invoices/invoice.service'

export const useInvoices = (currentPage: number = 1) => {
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
				var result = Object.entries(data).map(key => ({
					id: 1,
					overviewType: key[0],
					amount: key[1]
				}))

				result.forEach((item, i) => {
					item.id = i + 1
				})

				return result
			}
		})

	return {
		isLoadingOverviewInvoices,
		overviewInvoices,
		isLoadingLatestInvoices,
		latestInvoices
	}
}
