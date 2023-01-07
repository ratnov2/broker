import {request} from '@/api/request.api'
import {getUserProfile} from '@/config/api.config'
import {IUserProfile} from "@/services/user/userProfile.interface";

export const UserService = {
	async getProfile() {
		return request<IUserProfile>({url: getUserProfile('')})
	}
}