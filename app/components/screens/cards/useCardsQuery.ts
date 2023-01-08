import { useMutation, useQuery } from 'react-query'

import { BackgroundColorBank } from '@/utils/background-color-bank'
import { NormalizeNumberCard } from '@/utils/normalize-number-card'

import { BankAccountService } from '@/services/card/bank-account.service'

export const useCardsQuery = () => {
	const userCards = useQuery(
		'get-user-cards',
		() => BankAccountService.getAllUserCards(),
		{
			select: ({ data }) =>
				data.map(card => ({
					...card,
					number: NormalizeNumberCard(card.number),
					background: BackgroundColorBank(card.bankName)
				}))
		}
	)
	const newCard = useMutation(
		'create-card',
		() => BankAccountService.createCard(),
		{
			onSuccess: () => userCards.refetch()
		}
	)

	return { userCards, newCard }
}
