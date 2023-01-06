import { getExpenseAllUrl, getIncomeAllUrl } from '@/config/api.config'

import { request } from '@/api/request.api'

import { IExpenseAll } from '@/screens/dashboard/card-statistic/expense/stat-expense.interface'
import { IIncomeAll } from '@/screens/dashboard/card-statistic/income/stat-income.interface'

export const StatisticsService = {
	async getIncomeAll() {
		return request<IIncomeAll>({ url: getIncomeAllUrl })
	},
	async getExpenseAll() {
		return request<IExpenseAll>({ url: getExpenseAllUrl })
	}
}
