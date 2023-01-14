import { instance } from 'api/interceptors'

import { ITransactionData, ITransactions } from '@/shared/types/transaction.types'

import { getTransactionsUrl } from '@/config/api.config'

export const TransactionService = {
	async getAll(page = 1, perPage = 5, orderBy = 'desc') {
		return instance.get<ITransactions>(
			getTransactionsUrl(page, perPage, orderBy)
		)
	},
	async createTransaction(data: ITransactionData) {
		return instance.post<string>(getTransactionsUrl(), data)
	}
}
