import { getTransactionsUrl } from '@/config/api.config'

import { instance } from '@/api/interceptors'
import { ITransfers } from '@/shared/types/transaction.types'

export const TransactionsService = {
	async getAll(currentPage: number, perPage = 5) {
		return instance.get<ITransfers>(
			getTransactionsUrl(`/?perPage=${perPage}&page=${currentPage}`)
		)
	},

	async delete(itemId: number) {
		return instance.delete(getTransactionsUrl(`/${itemId}`))
	}
}
