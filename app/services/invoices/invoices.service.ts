import { getAllInvoicesUrl, updateNewInvoiceUrl } from '@/config/api.config'

import { IInvoices } from '@/hooks/invoices/invoices.interface'

import { request } from '@/api/request.api'

import { IUpdateNewInvoice } from '@/services/invoices/invoices.interface'

export const InvoicesService = {
	async addNewInvoice({
		invoiceId,
		amount,
		items,
		recipient,
		files
	}: IUpdateNewInvoice) {
		return request({
			url: updateNewInvoiceUrl + invoiceId,
			method: 'PUT',
			data: { amount, items, recipient, files }
		})
	},

	async createNewInvoice() {
		return request<number>({
			url: getAllInvoicesUrl,
			method: 'POST'
		})
	},

	async getAllInvoices() {
		return request<IInvoices>({ url: getAllInvoicesUrl })
	}
}
