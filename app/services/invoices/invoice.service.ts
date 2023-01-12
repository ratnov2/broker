import { instance } from 'api/interceptors'

import { IInvoices, IOverviewStatistic } from '@/shared/types/invoice.types'

import { getInvoicesUrl } from '@/config/api.config'

export const InvoiceService = {
	async getAll(page = 1, perPage = 5) {
		return instance.get<IInvoices>(getInvoicesUrl(``, page, perPage))
	},

	async getStatistics() {
		return await instance.get<IOverviewStatistic>(
			getInvoicesUrl(`/statistics`)
		)
	}
}