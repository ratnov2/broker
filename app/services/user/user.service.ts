import { instance } from 'api/interceptors'

import { IUserContact } from '@/shared/types/users.types'

import { getUserProfile, getUsersUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

import { IUserProfile } from './userProfile.interface'

export const UserService = {
	async getUserContacts() {
		return instance.get<IUserContact[]>(getUsersUrl(`/contacts`))
	},
	async getProfile() {
		return request<IUserProfile>({ url: getUserProfile('') })
	}
}
