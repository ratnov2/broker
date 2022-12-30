import {
	getExpenseCategoriesUrl,
	getIncomeByDynamicUrl
} from '@/config/api.config'

import { request } from '@/api/request.api'

import { timeLapsType } from '@/screens/dashboard/middle/overview/overview.interface'
import {
	IExpenseCategories,
	IIncomeByDynamic,
	IIncomeByDynamicQueryParam
} from '@/services/statistics/statistics.interface'

export const StatisticsService = {
	async getIncomeByDynamic(type: timeLapsType) {
		return await request<IIncomeByDynamic[]>({
			url: getIncomeByDynamicUrl,
			params: {
				type: IIncomeByDynamicQueryParam[type]
			}
		})
	},

	async getExpenseCategories() {
		return await request<IExpenseCategories>({
			url: getExpenseCategoriesUrl
		})
	}
}
