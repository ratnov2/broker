import { instance } from 'api/interceptors'

import { ICard } from '@/shared/types/card.types'

import { getAccountsUrl } from '@/config/api.config'

//import { request } from '@/api/request.api'

export const CardService = {
	async getUserCards(page = 1, perPage = 5) {
		return instance.get<ICard[]>(
			getAccountsUrl(`/get-user-cards`, page, perPage)
		)
	}
}

/* export const CardService2 = {
	async getUserCards(page = 1, perPage = 5) {
		const response = await request<ICard[]>({
			url: getAccountsUrl(`/get-user-cards`, page, perPage),
			method: 'GET',
			data: { page, perPage }
		})

		console.log(JSON.stringify(response))
			
		return response
	}
} */
