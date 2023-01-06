import { getuser } from '@/config/api.config';
import { request } from './../../api/request.api';
export const NewService = {
	async newFunc () {
		return request<any>({url: getuser('')})
	}
}