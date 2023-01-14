import { instance } from 'api/interceptors'

import { IUserContact } from '@/shared/types/users.types'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getUserContacts() {
		return instance.get<IUserContact[]>(getUsersUrl(`/contacts`))
	}
}

export const UserService = {
	async getProfile() {
		return request<IUserProfile>({url: getUserProfile('')})
	}
}