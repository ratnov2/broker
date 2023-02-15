import { getPaymentUrl } from '@/config/api.config'

import { instance } from '@/api/interceptors'

export const PaymentService = {
	async createPayment() {
		const response = instance.post(getPaymentUrl(''), { amount: 150 })
		return response
	},
	async getInfoPayment(){
		const response = instance.post(getPaymentUrl('info'))
		return response
	}
}
