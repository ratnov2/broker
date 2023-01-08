import { useQuery } from '@tanstack/react-query'

import { UsersService } from '@/services/users/users.service'

export const useProfile = () => {
	const { data } = useQuery(['user-profile'], UsersService.getProfile)
	return { data }
}
