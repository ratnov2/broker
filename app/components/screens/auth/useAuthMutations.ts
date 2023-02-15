import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'
import { toast } from 'react-toastify'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	let process = false
	
	const { setUser } = useAuth()
	const router = useRouter()
	const { isLoading: isLoginLoading, mutate: loginSync,error } = useMutation(
		['login'],
		({ email, password }: IAuthFormData) =>
			AuthService.main('login', email, password),
		{
			onSuccess(data) {
				toast.success('Successfully logged in', {
					position: toast.POSITION.TOP_RIGHT
				})
				reset()
				router.replace('/')
			},		
		}
	)
	useEffect(()=>{
			
			
		if(error && !isLoginLoading)
		toast.error('Incorrectly email or password',{
			toastId: 'success1',
		})
	},[error])
	const { mutate: registerSync, isLoading: isRegisterLoading } = useMutation(
		['register'],
		({ email, password }: IAuthFormData) =>
			AuthService.main('reg', email, password),
		{
			onSuccess(data) {
				reset()
				setUser(data.user)
			}
		}
	)
 return {loginSync,
	registerSync,
	isLoading: isLoginLoading || isRegisterLoading}
	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
