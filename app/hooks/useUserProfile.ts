import {UserService} from "@/services/user/user.service";
import {useQuery} from '@tanstack/react-query'

export const useUserProfile = () => {
	const {data} = useQuery(['useUserProfile'], UserService.getProfile)
	
	return {data}
}