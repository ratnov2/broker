import { FC } from 'react'

import DashboardChartWrapper from '@/screens/dashboard/middle/chart/DashboardChartWrapper'
import DashboardChartLegend from '@/screens/dashboard/middle/chart/legend/DashboardChartLegend'
import ChartOutcome from '@/screens/dashboard/middle/outcome-categories/chart-doughnut/ChartOutcome'
import { categoriesData } from '@/screens/dashboard/middle/outcome-categories/outcome-categories.data'

const OutcomeCategories: FC = () => {
	return (
		<DashboardChartWrapper>
			<DashboardChartLegend title='Outcome Categories' />
			<ChartOutcome categoriesData={categoriesData} />
		</DashboardChartWrapper>
	)
}

export default OutcomeCategories
