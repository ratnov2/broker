import { FC } from 'react'

import DownloadAction from './download-action/DownloadAction'
import FilterOption from './transaction-filter/TransactionFilter'
import { IFilter } from './transaction-filter/transaction-filter.interface'

const TransactionTopTitle: FC<IFilter> = ({ options, setOrderBy, orderBy }) => {
	return (
		<div className='flex justify-between items-center mb-4 flex-wrap'>
			<h1 className='text-4xl font-bold text-black'>Transaction History</h1>
			<div className='flex justify-between mb-4'>
				<FilterOption
					options={options}
					setOrderBy={setOrderBy} orderBy={orderBy}/>
				<DownloadAction />
			</div>
		</div>
	)
}

export default TransactionTopTitle
