import { ArcElement, ChartData, Chart as ChartJS, Tooltip } from 'chart.js'
import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'



import { tailwindColors } from '@/utils/tailwind-colors.type'
import { categoriesDataType } from '../outcome-categories.interface'
import ChartOutcomeItem from './ChartOutcomeItem'

ChartJS.register(ArcElement, Tooltip)

type ChartOutcomeProps = {
	categoriesData: categoriesDataType[]
}

const ChartOutcome: FC<ChartOutcomeProps> = ({ categoriesData }) => {
	const chartData: ChartData<'doughnut'> = {
		labels: categoriesData.map(category => category.name),
		datasets: [
			{
				label: '%',
				data: categoriesData.map(category => category.data),
				backgroundColor: categoriesData.map(
					category => tailwindColors[category.color]
				),
				borderColor: categoriesData.map(
					category => tailwindColors[category.color]
				),
				borderWidth: 1
			}
		]
	}
	return (
		<div className='grid grid-cols-2'>
			{/* chart */}
			<div>
				<Doughnut data={chartData} />
			</div>
			{/* legend data */}
			<div className='flex'>
				<div className='flex flex-col flex-auto gap-y-7 ml-8'>
					<p className='text-gray font-semibold'>Legend</p>
					<ul className='flex flex-col gap-y-5'>
						{categoriesData.map(data => (
							<ChartOutcomeItem key={data._id} data={data} />
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ChartOutcome
