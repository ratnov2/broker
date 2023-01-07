import {GetUserService} from "@/services/user/user.service";
import {useQuery} from '@tanstack/react-query'

export const useUserProfile = () => {
	const {data} = useQuery(['useUserProfile'], GetUserService.getUser)
	
	return {data}
}