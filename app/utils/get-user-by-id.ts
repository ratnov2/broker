import { useQuery } from '@tanstack/react-query'

import { TypeUser } from '@/shared/types/user.type'

import { instance } from '@/api/interceptors'

export const getUserById = (userId: number) => {
	const { data: user } = useQuery(
		['getUser'],
		() =>
			instance.get<TypeUser>(
				`https://red-project-bank-app.herokuapp.com/api/users/by-id/${userId}`
			),
		{
			select: data => data.data
		}
	)

	return user
}
