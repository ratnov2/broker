
import { useGetProfile } from '@/hooks/useGetProfile'

import { useRouter } from 'next/router'
import { FC } from 'react'

//import { useAuth } from '@/hooks/useAuth'

//import { TypeComponentAuthFields } from '@/shared/types/auth.types'

const CheckLogin: FC<any> = ({
	children,
	Component: { isOnlyLogin },
}) => {
  
	const user = useGetProfile()
	const test = user.data?.data
	const router = useRouter()

	const Children = () => <>{children}</>
	if(user.isLoading) return null

	else if(test?.email){
    return <Children />
	}else{
    router.pathname !== '/auth' && router.replace('/auth')
		return null
  }
	
}

export default CheckLogin
