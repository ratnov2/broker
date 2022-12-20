import { FC } from 'react'

import Layout from '@/layout/Layout'

import NewTransactionForm from './new-transaction-form/NewTransactionForm'
import RecentRecipient from './recent-recipient/RecentRecipient'

const Transactions: FC = () => {
	return (
		<Layout title='Transactions'>
			<div className='mt-10 sm:mt-0 w-full h-screen'>
				<div className='flex flex-col'>
					<h1 className='text-2xl font-bold text-black mb-4'>
						Add New Transaction
					</h1>

					<div className='flex space-x-6'>
						<div className='w-2/3'>
							<NewTransactionForm />
						</div>
						<div className='w-1/3'>
							<RecentRecipient />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Transactions
