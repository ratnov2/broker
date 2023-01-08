import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/user/user.service'

export const useUserContacts = () => {
	const { data } = useQuery(['useUserContacts'], UserService.getUserContacts)

	return { data }
}
