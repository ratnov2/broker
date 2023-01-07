import { getCards } from '@/config/api.config'

import { request } from '@/api/request.api'

import { ICardNew } from '@/screens/balance/top/interfaces/balanceStats.interface'

export const NewService = {
	async newFunc() {
		return request<ICardNew[]>({ url: getCards('') })
	}
}
