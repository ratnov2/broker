import { FC, SetStateAction, useState } from 'react';



import Layout from '@/layout/Layout';



import { useTransactions } from '@/hooks/useTransactions'



import TransactionHistory from './transaction-history/TransactionHistory';


const Transactions: FC = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const { isLoadingTransactions, transactions } = useTransactions(currentPage)

	return (
		<Layout title='TransactionHistory'>
			<div className='h-screen w-full'>
				<h1 className='text-top text-3xl font-bold text-black mb-10'>
					Transaction History
				</h1>
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