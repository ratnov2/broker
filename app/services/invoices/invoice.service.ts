import { axiosClassic } from 'api/interceptors'

import { ILatestInvoice, IOverviewStatistic } from '@/shared/types/invoice.types'

import { getInvoicesUrl } from '@/config/api.config'

export const InvoiceService = {
	async getAll() {
		return axiosClassic.get<ILatestInvoice[]>(getInvoicesUrl(``))
	},

	async getStatistics() {
		return axiosClassic.get<IOverviewStatistic>(getInvoicesUrl(`statistics`))
	}
}
