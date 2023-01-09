import { IUserProfile } from '@/shared/types/user.interface'

import { getProfileUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

export const UsersService = {
	async getProfile() {
		return request<IUserProfile>({
			url: getProfileUrl
		})
	}
}
