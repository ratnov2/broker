import Cookies from 'js-cookie'

import { getAuthUrl } from '@/config/api.config'

import { getContentType } from '@/api/api.helpers'
import { instance } from '@/api/interceptors'

import { saveToStorage } from '@/services/auth/auth.helper'

export const getNewTokens = async () => {
	const refreshToken = Cookies.get('refreshToken')

	if (!refreshToken) return

	const response = await instance.post(
		getAuthUrl('/login/access-token'),
		{ refreshToken },
		{ headers: getContentType() }
	)

	if (response.data.accessToken) saveToStorage(response.data)

	return response
}
