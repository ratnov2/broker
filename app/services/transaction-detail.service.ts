import axios, { AxiosRequestConfig } from 'axios'
import { API_URL } from '@/config/api.config'
import { getAccessToken } from '@/services/auth/auth.helper'

axios.defaults.baseURL = API_URL

import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'

export const TransactionService = {
	async getAll() {

		const accessToken = getAccessToken()
		const options: AxiosRequestConfig = {
			headers: {
				'Authorization': `Bearer ${accessToken}`
			},
		};

		return axios.get<ITransactionDetail[]>('/invoices')
	},
	async getById(id: string | undefined) {

		const accessToken = getAccessToken()
		const options: AxiosRequestConfig = {
			headers: {
				'Authorization': `Bearer ${accessToken}`
			},
		};

		return axios.get<ITransactionDetail>(`/invoices/${id}`, options)
	},
	async create(data: ITransactionDetail) {

		const accessToken = getAccessToken()
		const options: AxiosRequestConfig = {
			headers: {
				'Authorization': `Bearer ${accessToken}`
			},
		};

		return axios.post('/invoices', data, {
			headers: { 'Content-Type': 'application/json' },
		})
	},
}
