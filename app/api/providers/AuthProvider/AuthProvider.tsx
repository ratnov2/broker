import { log } from 'console'
import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { useGetProfile } from '@/hooks/useGetProfile'

import { TypeRoles } from '@/../pages/_app'
import { AuthService, authApi } from '@/services/auth/auth.service'

//import { useAuth } from '@/hooks/useAuth'

//import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })
const DynamicCheckPayment = dynamic(() => import('./CheckPayment'), {
	ssr: false
})
const DynamicCheckLogin = dynamic(() => import('./CheckLogin'), { ssr: false })

export const checkAuth = async () => {
	try {
		const response = await authApi.getNewTokens()
		return response.data
	} catch (error) {
		return console.log('error')
	}
}

const AuthProvider: FC<{
	children: React.ReactNode
	Component: TypeRoles | any
}> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser, isUserLocate, isPayment, isOnlyLogin }
}) => {
	const user = useGetProfile()
	const { pathname } = useRouter()
	//if(user.isLoading) return null

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user.data?.data) AuthService.logout()
	}, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

	// if(isPayment){
	// 	return <DynamicCheckPayment Component={{isPayment}}>{children}</DynamicCheckPayment>
	// }
	// if(isOnlyLogin){
	// 	return <DynamicCheckLogin Component={{isOnlyLogin}}>{children}</DynamicCheckLogin>
	// }
	return !isOnlyAdmin && !isOnlyUser && !isUserLocate  ? (
		<>{children}</>
	) 
	// : isPayment ? (
	// 	<DynamicCheckPayment Component={{ isPayment }}>
	// 		{children}
	// 	</DynamicCheckPayment>
	// ) 
	: (
		<DynamicCheckRole
			Component={{ isOnlyAdmin, isOnlyUser, isUserLocate, isPayment }}
		>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
