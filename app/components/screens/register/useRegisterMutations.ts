import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'
import { toast } from 'react-toastify'

import { IAuthFormData } from '@/shared/types/auth.interface'

import { useAuth } from '@/hooks/useAuth'

import { AuthService, authApi } from '@/services/auth/auth.service'
import { ToastrCustomHelper } from '@/ui/toastr/ToastrCustomHelper'
import { IRegisterInput } from './register.interface'

export const useAuthMutations = (reset: UseFormReset<IRegisterInput>) => {
	

	const router = useRouter()

	const {
		mutate: registerSync,
		isLoading: isRegisterLoading,
		error: registerError
	} = useMutation(
		['register'],
		({ email, password,lastName,firstName,phone }: IRegisterInput) =>
			authApi.register({ email, password,lastName,firstName,phone }),
		{
			onSuccess(data) {
				toast.success('Successfully logged in', {
					position: toast.POSITION.TOP_RIGHT
				})
				reset()
				router.replace('/')
			},
			onError(data) {
				//@ts-ignore
				toast.error(data.response.data.message, {
					position: toast.POSITION.TOP_RIGHT
				})
			}
		}
	)


	return {
		registerSync,
		isLoading: isRegisterLoading
	}
	
}
