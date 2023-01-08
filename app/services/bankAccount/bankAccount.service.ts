import { getCards, transfer } from '@/config/api.config'

import { request } from '@/api/request.api'

import { ICardNew } from '@/screens/balance/top/interfaces/balanceTop.interface'

export const BankAccountService = {
	async getCards() {
		return request<ICardNew[]>({ url: getCards('') })
	},

	async transfer(data: any) {
		const { fromAccountId, toAccountId, amount } = data

		return await request<any>({
			url: transfer(),
			method: 'PATCH',
			data: { fromAccountId, toAccountId, amount }
		})
	}
}
