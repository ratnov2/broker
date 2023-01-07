import {request} from '@/api/request.api'
import {getUser} from '@/config/api.config'
import {userProfile} from "@/services/user/userProfile.interface";

export const GetUserService = {
	async getUser() {
		return request<userProfile>({url: getUser('')})
	}
}