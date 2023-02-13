import { NextPage } from 'next'

import Auth from '@/screens/auth/Auth'
import AuthProvider from '@/api/providers/auth/AuthProvider'

const AuthPage: NextPage = () => {
	return <AuthProvider><Auth /></AuthProvider>
}

export default AuthPage
