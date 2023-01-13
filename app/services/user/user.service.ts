import { instance } from 'api/interceptors'

import { IUserContact } from '@/shared/types/user.interface'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getUserContacts() {
		return instance.get<IUserContact[]>(getUsersUrl(`/contacts`))
	}
}
