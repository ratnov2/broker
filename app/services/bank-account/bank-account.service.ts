import { getUserCardsUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

import { IUserCard } from '@/screens/dashboard/top/card/card.interface'

export const BankAccountService = {
	async getUserCards() {
		return request<IUserCard[]>({ url: getUserCardsUrl })
	}
}
