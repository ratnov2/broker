import {
	getBankAccountUrl,
	getCardsUrl,
	getTransferUrl
} from '@/config/bank-account.config'

import { request } from '@/api/request.api'

import { ICard } from '@/screens/balance/top/interfaces/balance-top.interface'
import { IBankAccount } from '@/services/bank-account/bank-account.interface'

export const BankAccountService = {
	async getCards() {
		return request<ICard[]>({ url: getCardsUrl() })
	},

	async transfer(data: any) {
		const { fromAccountId, toAccountId, amount } = data

		return request<any>({
			url: getTransferUrl(),
			method: 'PATCH',
			data: { fromAccountId, toAccountId, amount }
		})
	},

	async getBankAccount(id: number) {
		return request<IBankAccount>({ url: getBankAccountUrl(id) })
	}
}
