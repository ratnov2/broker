import { useQuery } from '@tanstack/react-query'

import { NewService } from '@/services/getCards/getCards.service'

export const useCards = () => {
	const { data } = useQuery(['h5321'], NewService.newFunc)

	return { data }
}
