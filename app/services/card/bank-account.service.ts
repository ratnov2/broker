import { IOperations, IUserCard } from '@/shared/types/bank-accounts.interface'

import { getAccountsUrl } from '@/config/api.config'

import { instance } from '@/api/interceptors'

export const  BankAccount = {
	 getAllBankAccounts: async() => instance.get(getAccountsUrl('')),
	getAllUserCards: () =>
		instance.get<IUserCard[]>(getAccountsUrl('/get-user-cards')),
	createBankAccount: () => instance.post(getAccountsUrl('')),
	createCard: () => instance.post(getAccountsUrl('/create-card')),
	makeTopUp: async(data: IOperations) =>
		instance.patch(getAccountsUrl('/balance/top-up'), data),
	makeWithdrawal: (data: IOperations) =>
		instance.patch(getAccountsUrl('/balance/withdrawal'), data)
}
