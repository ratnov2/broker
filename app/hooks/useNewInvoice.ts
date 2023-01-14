import { useEffect, useState } from 'react'

import { useCreateNewInvoice } from '@/hooks/invoices/useCreateNewInvoice'
import { useGetAllInvoices } from '@/hooks/invoices/useGetAllInvoices'

export const useNewInvoice = () => {
	const { allInvoices } = useGetAllInvoices()

	const [invoiceId, setInvoiceId] = useState<number | undefined | 'create'>()

	const { createInvoice, data } = useCreateNewInvoice()

	useEffect(() => {
		if (!data && invoiceId !== 'create') {
			const emptyInvoice = allInvoices?.invoices.find(
				invoice => invoice.recipientId === null
			)

			if (emptyInvoice) {
				setInvoiceId(emptyInvoice.id)
			}

			if (allInvoices && !invoiceId && !emptyInvoice) {
				createInvoice()
			}
		} else {
			if (invoiceId === 'create') {
				createInvoice()
			}

			setInvoiceId(data)
		}
	}, [allInvoices, invoiceId, data])

	return { invoiceId, setInvoiceId }
}
