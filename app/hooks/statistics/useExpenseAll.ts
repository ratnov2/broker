import { useQuery } from '@tanstack/react-query'

import { StatisticsService } from '@/services/statistics/statistics.service'

export const useExpenseAll = () => {
	const { data } = useQuery(['getExpenseAll'], StatisticsService.getExpenseAll)
	return { data }
}
