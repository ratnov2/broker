import Link from 'next/dist/client/link'
import { FC } from 'react'

import Button from '@/ui/button/Button'

import FilterOption from './transaction-filter/TransactionFilter'
import { IFilter } from './transaction-filter/transaction-filter.interface'

const TransactionTopTitle: FC<IFilter> = ({ options, setOrderBy, orderBy }) => {
	return (
		<div className='flex justify-between items-center mb-4 flex-wrap'>
			<h1 className='text-4xl font-bold text-black'>Transaction History</h1>
			<div className='flex justify-between mb-4'>
				<FilterOption
					options={options}
					setOrderBy={setOrderBy}
					orderBy={orderBy}
				/>
				<Button
					variant='primary'
					size={'xl'}
					type='submit'
					className='px-10 py-3 bg-purple rounded-full text-white font-semibold w-[250px]'
				>
					<Link href={'/transactions/new-transaction'}>
						<span>Add new transaction</span>
					</Link>
				</Button>
			</div>
		</div>
	)
}

export default TransactionTopTitle
