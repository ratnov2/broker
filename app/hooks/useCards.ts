import { useQuery } from '@tanstack/react-query'

import { CardService } from '@/services/cards/cards.service'

export const useCards = (currentPage = 1, itemsPerPage = 5) => {
	const { isLoading: isLoadingCards, data: userCards } = useQuery(
		['user-cards', currentPage, itemsPerPage],
		() => CardService.getUserCards(currentPage, itemsPerPage),
		{
			select: ({ data }) => data
		}
	)

	return {
		isLoadingCards,
		userCards
	}
}
