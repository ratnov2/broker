import { IUserProfile } from '@/shared/types/user.interface'

import { getProfileUrl, getUsersUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

export const UsersService = {
	async getProfile() {
		return request<IUserProfile>({
			url: getProfileUrl
		})
	},
	async getUsers() {
		return request<IUserProfile[]>({
			url: getUsersUrl
		})
	}
}
