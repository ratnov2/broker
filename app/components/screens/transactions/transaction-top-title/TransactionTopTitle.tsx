import { FC, useState } from 'react'
import Select from 'react-select'

import styles from './TransactionTopTitle.module.scss'
import DownloadAction from './download-action/DownloadAction'
import FilterOption from './transaction-filter/TransactionFilter'

const options = [
	{
		value: 'newest',
		label: 'Newest'
	},
	{
		value: 'amount-up',
		label: 'Amount up'
	},
	{
		value: 'amount-down',
		label: 'Amount down'
	}
]

const TransactionTopTitle: FC = ({}) => {
	return (
		<div className='flex justify-between items-center mb-4 flex-wrap'>
			<h1 className='text-2xl font-bold text-black'>Transaction History</h1>
			<div className='flex justify-between mb-4'>
				<FilterOption />
				<DownloadAction />
			</div>
		</div>
	)
}

export default TransactionTopTitle
