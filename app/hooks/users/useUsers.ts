import { useQuery } from '@tanstack/react-query'

import { UsersService } from '@/services/users/users.service'

export const useUsers = () => {
	const { data: users } = useQuery(['get users all'], UsersService.getUsers)

	return { users }
}
