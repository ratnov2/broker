import { axiosClassic } from 'api/interceptors'

import { ICard } from '@/shared/types/card.types'

import { getAccountsUrl } from '@/config/api.config'

export const TransactionService = {
	async getAll(page = 1, perPage = 5) {
		return axiosClassic.get<ICard[]>(getAccountsUrl(`get-user-cards`, page, perPage))
	}
}
