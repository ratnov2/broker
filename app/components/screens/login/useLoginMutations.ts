import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { UseFormReset } from 'react-hook-form'
import { toast } from 'react-toastify'


import { IAuthFormData } from '@/shared/types/auth.interface'

import {  authApi } from '@/services/auth/auth.service'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const router = useRouter()
	const {
		isLoading: isLoginLoading,
		mutate: loginSync,
		error: loginError
	} = useMutation(
		['login'],
		({ email, password }: IAuthFormData) =>
			authApi.login({ email, password }),
		{
			onSuccess(data) {
				toast.success('Successfully logged in', {
					position: toast.POSITION.TOP_RIGHT
				})
				reset()
				router.replace('/')
			},
			onError(data) {
				toast.error('Incorrectly password or login', {
					position: toast.POSITION.TOP_RIGHT
				})
			}
		}
	)

	return {
		loginSync,
		isLoading: isLoginLoading
	}
}
