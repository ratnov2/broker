import { FC } from 'react'

import Select from '@/ui/select/Select'

import styles from './DashboardChartLegend.module.scss'
import { timeRangeOptions } from '@/screens/dashboard/middle/overview/overview.data'
import { IChartLegend } from '@/screens/dashboard/middle/overview/overview.interface'

const DashboardChartLegend: FC<IChartLegend> = ({
	title,
	timeLaps,
	changeData
}) => {
	return (
		<div className='flex justify-between items-center mb-4 flex-wrap'>
			<div className='text-black py-2 text-1.5xl font-bold'>{title}</div>
			{timeLaps && changeData && (
				<div
					className={`${styles.legend} flex gap-x-6 items-center leading-none`}
				>
					<div className='flex gap-x-4 text-sm text-gray'>
						<span>
							<span>
								This{' '}
								<span className='min-w-[40px] inline-block capitalize'>
									{timeLaps}
								</span>
							</span>
						</span>
						<span>
							<span>
								Last{' '}
								<span className='min-w-[40px] inline-block capitalize'>
									{timeLaps}
								</span>
							</span>
						</span>
					</div>
					<Select
						className='min-w-[100px]'
						variant='secondary'
						defaultValue={{
							label: timeRangeOptions[0],
							value: '0'
						}}
						onChange={changeData}
						options={timeRangeOptions.map((label, value) => ({
							value: value.toString(),
							label: label
						}))}
					/>
				</div>
			)}
		</div>
	)
}

export default DashboardChartLegend