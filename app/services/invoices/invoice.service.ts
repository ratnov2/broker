import { instance } from 'api/interceptors'

import { IInvoice, IInvoices, IOverviewStatistic } from '@/shared/types/invoice.types'

import { getInvoicesUrl } from '@/config/api.config'

export const InvoiceService = {
	async getAll(page: number, perPage: number) {
		return instance.get<IInvoices>(getInvoicesUrl(``, page, perPage))
	},

	async getStatistics() {
		return await instance.get<IOverviewStatistic>(getInvoicesUrl(`/statistics`))
	},
	async getBySender() {
		return instance.get<IInvoice[]>(getInvoicesUrl(`/by-sender`))
	},
}
