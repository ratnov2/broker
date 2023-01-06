import { getIncomeAllUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

import { IIncomeAll } from '@/screens/dashboard/card-statistic/income/stat-income.interface'

export const StatisticsService = {
	async getIncomeAll() {
		return request<IIncomeAll>({ url: getIncomeAllUrl })
	}
}
