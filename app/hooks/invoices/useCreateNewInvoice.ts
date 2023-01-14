import { useMutation } from '@tanstack/react-query'

import { InvoicesService } from '@/services/invoices/invoices.service'

export const useCreateNewInvoice = () => {
	const { mutate: createInvoice, data } = useMutation(
		['create new invoice'],
		InvoicesService.createNewInvoice
	)

	return { createInvoice, data }
}
