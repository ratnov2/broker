import { getIncomeAllUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

export const StatisticsService = {
	async getIncomeAll() {
		return request({ url: getIncomeAllUrl })
	}
}
