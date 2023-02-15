import { useRouter } from 'next/router'

import Account from '@/components/account/Account'

import { useGetProfile } from '@/hooks/useGetProfile'


const AccountPage = () => {
	const router = useRouter()
	const user = useGetProfile()
	if (user.isLoading) return null
	if (user.data?.data?.email) {
		return <Account />
	} else {
		router.replace('/')
		return null
	}
}

export default AccountPage
