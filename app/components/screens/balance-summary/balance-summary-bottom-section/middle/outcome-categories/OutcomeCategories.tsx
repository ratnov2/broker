import { FC } from 'react'
import DashboardChartWrapper from '../chart/DashboardChartWrapper'
import DashboardChartLegend from '../chart/legend/DashboardChartLegend'
import ChartOutcome from './chart-doughnut/ChartOutcome'
import { categoriesData } from './outcome-categories.data'


const OutcomeCategories: FC = () => {
	return (
		<DashboardChartWrapper>
			<DashboardChartLegend title='Outcome Categories' />
			<ChartOutcome categoriesData={categoriesData} />
		</DashboardChartWrapper>
	)
}

export default OutcomeCategories
