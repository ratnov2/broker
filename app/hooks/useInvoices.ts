import { useQuery } from 'react-query'

import { InvoiceService } from '@/services/invoices/invoice.service'

export const useInvoices = (currentPage?: number) => {
	const {
		isLoading: isLoadingInvoices,
		data: invoices
	} = useQuery('invoices', () => InvoiceService.getAll(), {
		select: ({ data }) => data
	})

	return {
		isLoadingInvoices,
		invoices
	}
}
