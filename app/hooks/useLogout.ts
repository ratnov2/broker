import { useRouter } from 'next/router'

import { AuthService } from '@/services/auth/auth.service'

export const useLogout = () => {
	const { push } = useRouter()
	const logout = async () => {
		await AuthService.logout()
		push('/auth')
	}

	return { logout }
}
