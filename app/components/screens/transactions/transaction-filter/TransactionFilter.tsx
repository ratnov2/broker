import { FC } from 'react';



import styles from './FilterOption.module.scss'


// import { timeRangeOptions } from '@/screens/dashboard/middle/overview/overview.data'
// import { IChartLegend } from '@/screens/dashboard/middle/overview/overview.interface'

const filterOptions = ['Newest', 'Amount UP', 'Amount Down']

const FilterOption: FC = ({}) => {
	return (
		<div className='flex justify-between items-center mb-4 flex-wrap'>
			<h1 className='text-top text-3xl font-bold text-purple mb-10'>Transaction History</h1>
			<div
				className={`${styles.legend} flex gap-x-6 items-center leading-none `}
			>
				<select className='px-6 py-2 rounded-full bg-white  text-purple text-sm capitalize'>
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