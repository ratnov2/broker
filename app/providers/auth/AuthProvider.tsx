import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import CheckRole from './CheckRole'
import { IContext, TypeUserState } from './auth-provider.interface'
import { useCheckAuth } from './useCheckAuth'
import { AuthService } from '@/services/auth/auth.service'

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)
	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) useCheckAuth()
	}, [])

	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken && user) {
			AuthService.logout()
			setUser(null)
		}
	}, [pathname])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			<CheckRole>{children}</CheckRole>
		</AuthContext.Provider>
	)
}

export default AuthProvider
