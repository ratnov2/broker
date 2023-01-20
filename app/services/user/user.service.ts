import { instance } from 'api/interceptors'

import { IUserContact } from '@/shared/types/users.types'

import { getUserProfile, getUserUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

import { IUserProfile } from './user-profile.interface'

export const UserService = {
	async getUserContacts() {
		return instance.get<IUserContact[]>(getUserUrl(`/contacts`))
	},
	async getProfile() {
		return request<IUserProfile>({ url: getUserProfile('') })
	}
}
