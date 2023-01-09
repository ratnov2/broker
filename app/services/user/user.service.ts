import { getUserContactsUrl, getUserProfileUrl } from '@/config/user.config'

import { request } from '@/api/request.api'

import {
	IUserContact,
	IUserProfile
} from '@/services/user/user-profile.interface'

export const UserService = {
	async getProfile() {
		return request<IUserProfile>({ url: getUserProfileUrl() })
	},
	async getUserContacts() {
		return request<IUserContact[]>({ url: getUserContactsUrl() })
	}
}
