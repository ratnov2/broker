import { useQuery } from '@tanstack/react-query'

import { UserService } from '@/services/users/users.service'

export const useUsers = () => {
	const { data: users } = useQuery(['get users all'], UserService.getUsers)

	return { users }
}
