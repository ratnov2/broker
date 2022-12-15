import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'
import { ChangeEventHandler, FC } from 'react'
import { Bar } from 'react-chartjs-2'

import styles from './Chart.module.scss'
import {
	periodOptions,
	periodsType
} from '@/screens/dashboard/middle/overview/Overview'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

type OverviewHeadProps = {
	title: string
	timeLaps?: periodsType
	data: ChartData<'bar'>
	options?: ChartOptions<'bar'>
	ChangeData?: ChangeEventHandler<HTMLSelectElement>
}

const Chart: FC<OverviewHeadProps> = ({
	title,
	timeLaps,
	data,
	options,
	ChangeData
}) => {
	return (
		<div className='relative bg-white p-8 pt-24 rounded-[40px]'>
			<Bar options={options} data={data} />
			<div className='absolute top-8 left-8 right-8 flex justify-between items-center'>
				<div className='text-black py-2 text-1.5xl font-bold'>
					{title}
				</div>
				<div
					className={`${styles.legend} flex gap-x-6 items-center leading-none`}
				>
					<div className='flex gap-x-4 text-sm text-gray'>
						<span>
							This <p className='min-w-[40px]'>{timeLaps}</p>
						</span>
						<span>
							Last <p className='min-w-[40px]'>{timeLaps}</p>
						</span>
					</div>
					<select
						onChange={ChangeData}
						className='px-6 py-2 rounded-full bg-light-gray outline-none border-none text-purple text-sm'
					>
						{periodOptions.map(option => (
							<option value={option} key={option}>
								{option}
							</option>
						))}
						{/* <option value='week'>Week</option>
						<option value='year'>Year</option> */}
					</select>
				</div>
			</div>
		</div>
	)
}

export default Chart
