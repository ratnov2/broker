import { instance } from 'api/interceptors'

import { IUserProfile } from '@/shared/types/user.interface'
import { ISettingInput, IUserContact } from '@/shared/types/users.types'

import { getProfileUrl, getUsersUrl, getUserUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

export const UserService = {
	async getUserContacts() {
		return instance.get<IUserContact[]>(getUserUrl(`/contacts`))
	},

	async updateUser(data: ISettingInput) {
		return instance.put<string>(getUserUrl(`/profile`), data)
	},
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
