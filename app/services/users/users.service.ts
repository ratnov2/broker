import { axiosClassic } from 'api/interceptors';



import { IUserContact } from '@/shared/types/users.types';



import { getUsersUrl } from '@/config/api.config';


export const UserService = {
	async getUserContacts() {
		return axiosClassic.get<IUserContact[]>(getUsersUrl(`/contacts`))
	}
}