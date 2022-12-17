import { ArcElement, ChartData, Chart as ChartJS, Tooltip } from 'chart.js'
import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'

import { tailwindColors } from '@/utils/tailwindColors'

import { categoriesDataType } from '@/screens/dashboard/middle/outcome-categories/outcome-categories.interface'

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
							<li key={data._id} className='flex justify-between'>
								<div className='flex items-center gap-3'>
									<div
										className='h-4 w-4 rounded-full'
										style={{
											backgroundColor:
												tailwindColors[data.color]
										}}
									/>
									<div>
										<span>{data.name}</span>
										<span>
											{' '}
											({data.data}
											%)
										</span>
									</div>
								</div>
								<div className='font-bold'>
									{' '}
									{data.transactions}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ChartOutcome
