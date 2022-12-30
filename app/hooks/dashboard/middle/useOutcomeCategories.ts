import { useQuery } from 'react-query'

import { loopColors } from '@/utils/loopColors'

import { categoriesDataType } from '@/screens/dashboard/middle/outcome-categories/outcome-categories.interface'
import { StatisticsService } from '@/services/statistics/statistics.service'

export const useOutcomeCategories = () => {
	const { data: queryData } = useQuery(
		['middle-dashboard-section-outcome-categories'],
		StatisticsService.getExpenseCategories
	)

	const categoriesData: categoriesDataType[] = []

	// const queryData: { [key: string]: number } = {
	// 	one: 10,
	// 	two: 30,
	// 	three: 50,
	// 	four: 20,
	// 	five: 40,
	// 	six: 50,
	// 	seven: 27,
	// 	eight: 23,
	// 	nine: 15,
	// 	ten: 65
	// }

	if (queryData) {
		const colors = loopColors(queryData)
		const objectValues = Object.values(queryData)
		const total = objectValues.reduce((prev, curr) => prev + curr, 0)

		Object.keys(queryData).forEach((key, index) => {
			categoriesData[index] = {
				_id: `${key}-${index}`,
				color: colors[index],
				data: Math.round((queryData[key] / total) * 100),
				name: key,
				transactions: queryData[key]
			}
		})
	}

	return { categoriesData }
}
