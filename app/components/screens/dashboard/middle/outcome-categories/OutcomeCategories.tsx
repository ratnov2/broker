import { FC } from 'react'

import { useOutcomeCategories } from '@/hooks/dashboard/middle/useOutcomeCategories'

import DashboardChartWrapper from '@/screens/dashboard/middle/chart/DashboardChartWrapper'
import DashboardChartLegend from '@/screens/dashboard/middle/chart/legend/DashboardChartLegend'
import ChartOutcome from '@/screens/dashboard/middle/outcome-categories/chart-doughnut/ChartOutcome'

const OutcomeCategories: FC = () => {
	const { categoriesData } = useOutcomeCategories()

	return (
		<DashboardChartWrapper>
			<DashboardChartLegend title='Outcome Categories' />
			<ChartOutcome categoriesData={categoriesData} />
		</DashboardChartWrapper>
	)
}

export default OutcomeCategories
