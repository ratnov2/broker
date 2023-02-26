import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'
import { toast } from 'react-toastify'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { useAuth } from '@/hooks/useAuth'

import { AuthService, authApi } from '@/services/auth/auth.service'
import { ToastrCustomHelper } from '@/ui/toastr/ToastrCustomHelper'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	
	let process = false
	let id = 1
	const { setUser } = useAuth()
	const router = useRouter()
	const {
		isLoading: isLoginLoading,
		mutate: loginSync,
		error: loginError
	} = useMutation(
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
			}
		}
	)

	const {
		mutate: registerSync,
		isLoading: isRegisterLoading,
		error: registerError
	} = useMutation(
		['register'],
		({ email, password }: IAuthFormData) =>
			AuthService.main('register', email, password),
		{
			onSuccess(data) {
				reset()
				router.replace('/')
			},
			onError(data) {
				// console.log('ewrwerwerre')
				// toast('WOW22',{
				// 	toastId:'12'
				// })
			}
		}
	)
	useEffect(() => {
		if (loginError && !isLoginLoading)
			toast.error('Incorrectly email or password', {
				toastId: 'success1'
			})
	}, [loginError])

	useEffect(() => {
		id++
		if (registerError){
		toast.error(registerError?.response?.data.message,{
			toastId: id,
		})
	}
	}, [registerError])

	return {
		loginSync,
		registerSync,
		isLoading: isLoginLoading || isRegisterLoading
	}
	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
