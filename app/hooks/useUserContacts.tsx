import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/user/user.service'

export const usePUserContacts = (currentPage?: number) => {
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
