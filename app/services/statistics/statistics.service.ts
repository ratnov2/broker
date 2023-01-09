import {
	getExpenseCategoriesUrl,
	getIncomeByDynamicUrl
} from '@/config/api.config'

import { request } from '@/api/request.api'

import { timeLapsType } from '@/screens/dashboard/middle/overview/overview.interface'
import {
	EnumIncomeByDynamicQueryParam,
	IExpenseCategories,
	IIncomeByDynamic
} from '@/services/statistics/statistics.interface'

export const StatisticsService = {
	async getIncomeByDynamic(type: timeLapsType) {
		return request<IIncomeByDynamic[]>({
			url: getIncomeByDynamicUrl,
			params: {
				type: EnumIncomeByDynamicQueryParam[type]
			}
		})
	},

	async getExpenseCategories() {
		return request<IExpenseCategories>({
			url: getExpenseCategoriesUrl
		})
	}
}
