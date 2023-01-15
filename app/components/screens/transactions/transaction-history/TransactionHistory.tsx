import { FC, useState } from 'react'

import Pagination from '@/ui/pagination/Pagination'
import Loader from '@/ui/pagination/loader/Loader'

import styles from './TransactionHistory.module.scss'
import TransactionHistoryTableHeader from '@/screens/transactions/transaction-history/header/TransactionHistoryTableHeader'
import TransactionHistoryItem from '@/screens/transactions/transaction-history/rows/TransactionHistoryItem'
import { ITransactionHistory } from '@/screens/transactions/transaction-history/rows/transaction-history.interface'

const TransactionHistory: FC<ITransactionHistory> = ({
	transactions,
	isLoading,
	currentPage,
	setCurrentPage
}) => {
	const [transactionsPerPage] = useState(5)

	return (
		<div
			className={styles.transactionHistorySection}
			style={{ position: 'relative' }}
		>
			<h2>Transaction History</h2>
			<TransactionHistoryTableHeader />
			{isLoading ? (
				<Loader />
			) : transactions?.transactions.length ? (
				<>
					{transactions.transactions.map(transaction => (
						<TransactionHistoryItem
							key={transaction.id}
							transaction={transaction}
						/>
					))}
					{transactions && (
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							maxItems={transactions.length}
							itemsPerPage={transactionsPerPage}
						/>
					)}
				</>
			) : (
				<div className='h-[501px] flex items-center justify-center'>
					Transactions not found
				</div>
			)}
		</div>
	)
}

export default TransactionHistory
