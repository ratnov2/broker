import { useQuery } from '@tanstack/react-query'

import { StatisticsService } from '@/services/statistics/statistics.service'

export const useIncomeAll = () => {
	const { data } = useQuery(['getIncomeAll'], StatisticsService.getIncomeAll)
	return { data }
}
