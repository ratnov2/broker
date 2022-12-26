import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import { useTransactions } from '@/hooks/useTransactions'

import TransactionHistory from './transaction-history/TransactionHistory'
import TransactionTopTitle from './transaction-top-title/TransactionTopTitle'

const Transactions: FC = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const { isLoadingTransactions, transactions } = useTransactions(currentPage)

	return (
		<Layout title='TransactionHistory'>
			<div className='h-full w-full mt-12'>
				<TransactionTopTitle />
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
