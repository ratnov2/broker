import { useAuth } from '@/hooks/useAuth'

import { errorCatch } from '@/api/api.helpers'

import { getNewTokens } from './helper.auth'
import { AuthService } from '@/services/auth/auth.service'

export const useCheckAuth = async () => {
	const { setUser } = useAuth()

	try {
		const response = await getNewTokens()
		return response.data
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			AuthService.logout()
			setUser(null)
		}

		return null
	}
}
