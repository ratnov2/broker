import { useQuery } from '@tanstack/react-query'

import { InvoicesService } from '@/services/invoices/invoices.service'

export const useGetAllInvoices = () => {
	const { data: allInvoices } = useQuery(
		['get all invoices'],
		InvoicesService.getAllInvoices
	)
	return { allInvoices }
}
