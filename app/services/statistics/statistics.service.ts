import { getExpenseAllUrl, getIncomeAllUrl } from '@/config/api.config'
import {
	getExpenseCategoriesUrl,
	getIncomeByDynamicUrl
} from '@/config/api.config'

import { request } from '@/api/request.api'

import { IExpenseAll } from '@/screens/dashboard/card-statistic/stat-expense/stat-expense.interface'
import { IIncomeAll } from '@/screens/dashboard/card-statistic/stat-income/stat-income.interface'
import { timeLapsType } from '@/screens/dashboard/middle/overview/overview.interface'
import {
	EnumIncomeByDynamicQueryParam,
	IExpenseCategories,
	IIncomeByDynamic
} from '@/services/statistics/statistics.interface'

export const StatisticsService = {
	async getIncomeAll() {
		return request<IIncomeAll>({ url: getIncomeAllUrl })
	},
	async getExpenseAll() {
		return request<IExpenseAll>({ url: getExpenseAllUrl })
	},

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
