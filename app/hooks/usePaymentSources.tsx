import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/users/users.service'

export const usePaymentSources = (currentPage?: number) => {
	const { isLoading: isLoadingUserContacts, data: userContacts } = useQuery(
		['userContacts'],
		() => UserService.getUserContacts(),
		{
			select: ({ data }) => data
		}
	)

	return {
		isLoadingUserContacts,
		userContacts
	}
}
