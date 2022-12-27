import { axiosClassic } from 'api/interceptors'

import { ILatestInvoice } from '@/shared/types/invoice.types'

import { getInvoicesUrl } from '@/configs/api.config'

export const InvoiceService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<ILatestInvoice[]>(getInvoicesUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	}
}
