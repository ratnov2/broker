import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { CardService } from '@/services/cards/cards.service'

export const useCards = (currentPage: number = 1) => {
	const [itemsPerPage, setItemsPerPage] = useState<number>(5)

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
