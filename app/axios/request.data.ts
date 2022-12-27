import { getAuthUrl, getInvoicesUrl } from '@/config/api.config'

import { $host } from './axios'

export const AuthHostData = {
	login: (data: { email: string; password: string }) =>
		$host.post(getAuthUrl('login'), data),
	register: (data: { email: string; password: string }) =>
		$host.post(getAuthUrl('register'), data)
}

export const InvoicesHostData = {
	all: () => $host.get(getInvoicesUrl(''))
}
