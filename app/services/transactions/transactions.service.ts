import { axiosClassic } from 'api/interceptors'

import { ITransaction } from '@/shared/types/transaction.types'

import { getTransactionsUrl } from '@/config/api.config'

export const TransactionService = {
	async getAll() {
		return axiosClassic.get<ITransaction[]>(getTransactionsUrl(``))
	}
}
