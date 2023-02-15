
import { useGetProfile } from '@/hooks/useGetProfile'

import { useRouter } from 'next/router'
import { FC } from 'react'

//import { useAuth } from '@/hooks/useAuth'

//import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const CheckPayment: FC<any> = ({
	children,
	Component: { isPayment },
}) => {
  
	const user = useGetProfile()
	const test = user.data?.data
	const router = useRouter()
	
	const Children = () => <>{children}</>
	// if(user.isLoading) {
	// 	return null
	// }
	// else if(test && isPayment){
  //   return <Children />
	// }else{
  //   router.pathname !== '/auth' && router.replace('/auth')
	// 	return null
  // }
	if (!isPayment) return <Children />

	if (test?.isPayment) return <Children />

	if (!isPayment) {
		router.pathname !== '/404' && router.replace('/404')
		return null
	}

	const isUser = user && !test?.isPayment

	if (isUser && false) return <Children />
	else {
		router.pathname !== '/auth' && router.replace('/auth')
		return null
	}
	
}

export default CheckPayment
