import { axiosClassic } from 'api/interceptors';



import { IInvoice, IOverviewStatistic } from '@/shared/types/invoice.types'



import { getInvoicesUrl } from '@/config/api.config';


export const InvoiceService = {
	async getAll(page = 1, perPage = 5) {
		return axiosClassic.get<IInvoice[]>(getInvoicesUrl(``, page, perPage))
	},

	async getStatistics() {
		return (await axiosClassic.get<IOverviewStatistic>(getInvoicesUrl(`/statistics`)))
	}
}