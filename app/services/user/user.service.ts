import { getUserContacts, getUserProfile } from '@/config/api.config'

import { request } from '@/api/request.api'

import {
	IUserContact,
	IUserProfile
} from '@/services/user/userProfile.interface'

export const UserService = {
	async getProfile() {
		return request<IUserProfile>({ url: getUserProfile('') })
	},
	async getUserContacts() {
		return request<IUserContact[]>({ url: getUserContacts('') })
	}
}
