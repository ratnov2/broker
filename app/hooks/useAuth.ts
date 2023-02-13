import { AuthContext } from '@/api/providers/auth/AuthProvider'
import { useContext } from 'react'

export const useAuth = () => useContext(AuthContext)
