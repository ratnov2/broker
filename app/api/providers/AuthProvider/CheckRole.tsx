
import { useGetProfile } from '@/hooks/useGetProfile'
import { log } from 'console'
import { useRouter } from 'next/router'
import { FC } from 'react'

//import { useAuth } from '@/hooks/useAuth'

//import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const CheckRole: FC<any> = ({
	children,
	Component: { isOnlyAdmin, isOnlyUser,isUserLocate,isPayment },
}) => {
	const user = useGetProfile()
	const test = user.data?.data
	const router = useRouter()
	console.log('22332324');
	
	const Children = () => <>{children}</>

	if (!isOnlyAdmin && !isOnlyUser) return <Children />

	if (test?.isAdmin) return <Children />

	if (isOnlyAdmin) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	const isUser = test && !test.isAdmin

	if (isUser && isOnlyUser) return <Children />
	else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
}

export default CheckRole
