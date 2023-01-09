import { useQuery } from '@tanstack/react-query'

import { avatarPath } from '@/utils/avatarPath'

import { UsersService } from '@/services/users/users.service'

export const useProfile = () => {
	const { data: profile } = useQuery(
		['user-profile'],
		UsersService.getProfile,
		{
			select(profile) {
				return {
					...profile,
					avatarPath: avatarPath(profile)
				}
			}
		}
	)
	return { profile }
}
