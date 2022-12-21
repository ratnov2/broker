import { FC } from 'react';



import styles from './FilterOption.module.scss'


// import { timeRangeOptions } from '@/screens/dashboard/middle/overview/overview.data'
// import { IChartLegend } from '@/screens/dashboard/middle/overview/overview.interface'

const filterOptions = ['Newest', 'Amount UP', 'Amount Down']

const FilterOption: FC = ({}) => {
	return (
		<div className='flex justify-between items-center mb-4 flex-wrap'>
			<div className='text-black py-2 text-1.5xl font-bold'>title</div>
			<div
				className={`${styles.legend} flex gap-x-6 items-center leading-none`}
			>
				<select className='px-6 py-2 rounded-full bg-light-gray outline-none border-none text-purple text-sm capitalize'>
					{filterOptions.map(filterOption => (
						<option value={filterOption} key={filterOption}>
							{filterOption}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default FilterOption