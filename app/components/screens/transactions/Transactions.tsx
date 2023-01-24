import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import { useTransactions } from '@/hooks/useTransactions'

import TransactionHistory from './transaction-history/TransactionHistory'
import TransactionTopTitle from './transaction-top-title/TransactionTopTitle'

const options = [
	{
		value: 'desc',
		label: 'Newest'
	},
	{
		value: 'asc',
		label: 'Oldest'
	}
]

const Transactions: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [orderBy, setOrderBy] = useState<string>(options[0].value)
	const { isLoadingTransactions, transactions } = useTransactions(
		currentPage,
		orderBy
	)

	return (
		<Layout title='TransactionHistory'>
			<div className='w-full mt-12'>
				<TransactionTopTitle
					setOrderBy={setOrderBy}
					options={options}
					orderBy={orderBy}
				/>
				<TransactionHistory
					transactions={transactions}
					isLoading={isLoadingTransactions}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</Layout>
	)
}

export default Transactions
