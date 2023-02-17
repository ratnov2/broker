import { IAuthResponse } from '@/shared/types/auth.interface'

import { getAuthUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

import { removeTokensStorage, saveToStorage } from './auth.helper'
import { axiosClassic } from '@/api/interceptors'
import Cookies from 'js-cookie'
import { getContentType } from '@/api/api.helpers'
import { toast } from 'react-toastify'

export const AuthService = {
	async main(variant: 'reg' | 'login', email: string, password: string) {
		// const response = await request<IAuthResponse>({
		// 	url: getAuthUrl(`/${variant === 'reg' ? 'register' : 'login'}`),
		// 	method: 'POST',
		// 	data: { email, password }
		// })
    const body = {email,password}
    const response = await axiosClassic.put(variant,body)
    
		if (!response) {
      throw new Error('Что-то пошло не так');
    }
		if (response.data.accessToken) {
			saveToStorage(response.data.response)
		}

		return response
	},

	async logout() {
		await removeTokensStorage()
		localStorage.removeItem('user')
	}
}
export const authApi = {
  async login(body:any) {
    const response = await axiosClassic.post('auth/login', body)
    return response
  },
  async register(body:any) {
    const response = await axiosClassic.post('auth/register', body)
    return response
  },
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')
    const response = await axiosClassic.post(
      `/auth/login/access-token`,
      {
        refreshToken,
      },
      {
        headers: getContentType(),
      }
    )

    if (response.data.accessToken) {
      saveToStorage(response.data)
    }

    return response
  },
  async check(body:any) {
    const response = await axiosClassic.post('auth/login', body)
    return response
  },
}