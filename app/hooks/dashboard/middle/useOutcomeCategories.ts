import { useQuery } from '@tanstack/react-query'

import { loopColors } from '@/utils/loopColors'

import { categoriesDataType } from '@/screens/dashboard/middle/outcome-categories/outcome-categories.interface'
import { StatisticsService } from '@/services/statistics/statistics.service'

const categoriesData: categoriesDataType[] = []

export const useOutcomeCategories = () => {
	useQuery(
		['middle-dashboard-section-outcome-categories'],

		StatisticsService.getExpenseCategories,

		{
			onSuccess(object) {
				const colors = loopColors(object)
				const objectValues = Object.values(object)
				const total = objectValues.reduce((prev, curr) => prev + curr, 0)

				Object.keys(object).forEach((key, index) => {
					categoriesData[index] = {
						_id: `${key}-${index}`,
						color: colors[index],
						data: Math.round((object[key] / total) * 100),
						name: key,
						transactions: object[key]
					}
				})
			}
		}
	)

	return { categoriesData }
}
