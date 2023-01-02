import { axiosClassic } from 'api/interceptors'

import { IInvoice, IOverviewStatistic } from '@/shared/types/invoice.types'

import { getInvoicesUrl } from '@/config/api.config'

export const InvoiceService = {
	async getAll() {
		return axiosClassic.get<IInvoice[]>(getInvoicesUrl(``))
	},

	async getStatistics() {
		return axiosClassic.get<IOverviewStatistic>(getInvoicesUrl(`statistics`))
	}
}
