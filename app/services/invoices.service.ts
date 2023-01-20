import { IInvoice } from '@/shared/types/invoice.types'

import { getInvoicesUrl } from '@/config/api.config'

import { instance } from '@/api/interceptors'

export const InvoicesService = {
	async getBySender() {
		return instance.get<IInvoice[]>(getInvoicesUrl('/by-sender'))
	}
}
