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
				data.map(card => ({
					...card,
					number: NormalizeNumberCard(card.number),
					background: BackgroundColorBank(card.bankName)
				}))
		}
	)
	const newCard = useMutation('create-card', () => BankAccount.createCard(), {
		onSuccess: () => userCards.refetch()
	})
	
	

	return { userCards, newCard }
}
