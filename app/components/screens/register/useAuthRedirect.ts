import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { useGetProfile } from '@/hooks/useGetProfile'
import { UserService } from '@/services/user/user.service'

export const useAuthRedirect = async() => {
	// console.log(localStorage.getItem('user'))
	//const { user } = useAuth()
	//const user = useGetProfile()

	const { push } = useRouter()

	// const user = useQuery(['get-user'], () =>
	// 	UserService.getProfile()
	// )

	useEffect(() => {
		//if (user.data?.data) {
		//	push('/')
		})
	//}, [user.data?.data])
}
