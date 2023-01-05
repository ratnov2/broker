import { axiosClassic } from 'api/interceptors'

import { ITransaction } from '@/shared/types/transaction.types'

import { getTransactionsUrl } from '@/config/api.config'

export const TransactionService = {
	async getAll(page = 1, perPage = 5, orderBy = 'desc') {
		return axiosClassic.get<ITransaction[]>(getTransactionsUrl(page, perPage, orderBy))
	}
}
