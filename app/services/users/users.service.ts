import { instance } from 'api/interceptors'

import { ISettingInput, IUserContact } from '@/shared/types/users.types'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getUserContacts() {
		return instance.get<IUserContact[]>(getUsersUrl(`/contacts`))
	},

	async updateUser(data: ISettingInput) {
		return instance.put<string>(getUsersUrl(`/profile`), data)
	}
}
