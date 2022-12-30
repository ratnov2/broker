import { useMutation, useQuery } from 'react-query'

import { IOperations } from '@/shared/types/bank-accounts.interface'

import { BackgroundColorBank } from '@/utils/background-color-bank'
import { NormalizeNumberCard } from '@/utils/normalize-number-card'

import { BankAccount } from '@/services/card/bank-account.service'

export const useCardsQuery = () => {
	const userCards = useQuery(
		'get-user-cards',
		() => BankAccount.getAllUserCards(),
		{
			select: ({ data }) =>
				data.map(el => ({
					...el,
					number: NormalizeNumberCard(el.number),
					background: BackgroundColorBank(el.bankName)
				}))
		}
	)
	const newCard = useMutation('create-card', () => BankAccount.createCard(), {
		onSuccess: () => userCards.refetch()
	})
	const topUp = useMutation(
		'top-up',
		(data: IOperations) => BankAccount.makeTopUp(data),
		{
			onSuccess: () => userCards.refetch()
		}
	)
	const withdrawal = useMutation(
		'withdrawal',
		(data: IOperations) => BankAccount.makeWithdrawal(data),
		{
			onSuccess: () => userCards.refetch()
		}
	)

	return { userCards, newCard, topUp, withdrawal }
}
