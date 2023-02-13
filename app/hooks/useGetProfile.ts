import { useQuery } from '@tanstack/react-query'


import { UserService } from '@/services/user/user.service'

export const useGetProfile = () => {
	const user = useQuery(['get-user'], () =>
		UserService.getProfile()
	)
	return user
}
