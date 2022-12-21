import { FC, SetStateAction, useState } from 'react'

import Layout from '@/layout/Layout'

import { useTransactions } from '@/hooks/useTransactions'

import FilterOption from './transaction-filter/TransactionFilter'
import TransactionHistory from './transaction-history/TransactionHistory'

const Transactions: FC = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const { isLoadingTransactions, transactions } = useTransactions(currentPage)

	return (
		<Layout title='TransactionHistory'>
			<div className='h-screen w-full'>
				<FilterOption />
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
