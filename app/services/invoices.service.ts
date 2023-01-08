import { getInvoicesUrl } from '@/config/api.config'

import { instance } from '@/api/interceptors'

import { IInvoice } from '@/screens/balance/invoices-sent/invoices.interface'

export const InvoicesService = {
	async getBySender() {
		return instance.get<IInvoice[]>(getInvoicesUrl('/by-sender'))
	}
}
