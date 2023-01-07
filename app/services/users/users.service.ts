import { axiosClassic } from 'api/interceptors'

import { ISettingInput, IUserContact } from '@/shared/types/users.types'

import { getUsersUrl } from '@/config/api.config'

export const UserService = {
	async getUserContacts() {
		return axiosClassic.get<IUserContact[]>(getUsersUrl(`/contacts`))
	},

	async updateUser(data: ISettingInput) {
		return axiosClassic.put<string>(getUsersUrl(`/profile`), data)
	}
}
