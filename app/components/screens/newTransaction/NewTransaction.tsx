import { FC } from 'react'

//import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'
import Layout from '@/layout/Layout'

import RecipientRecent from './recipient-recent/RecipientRecent'
import TransactionForm from './transaction-form/TransactionForm'
import { TransactionType } from './transaction-type/TransactionType'

const Transactions: FC = () => {
	const onSubmit = (data: TransactionType) => {
		console.log(123)
		console.log(data)
		console.log(321)
	}
	return (
		<Layout title='Transactions'>
			<div className='mt-10 sm:mt-0 w-full h-screen'>
				<div className='flex flex-col'>
					<h1 className='text-2xl font-bold text-black mb-4'>
						Add New Transaction
					</h1>

					<div className='flex space-x-10'>
						<div className='w-2/3'>
							<TransactionForm onSubmit={onSubmit} />
						</div>
						<div className='w-1/3'>
							<RecipientRecent />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Transactions
