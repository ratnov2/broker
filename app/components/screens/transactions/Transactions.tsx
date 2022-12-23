import { FC } from 'react'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

import Layout from '@/layout/Layout'

import { ITransaction } from './TransactionType'
import { TransactionFormDefault } from './data'
import RecipientRecent from './recipient-recent/RecipientRecent'
import NewTransactionForm from './transaction-form/TransactionForm'

const Transactions: FC = () => {
	const onSubmitForm = (
		onValid: SubmitHandler<ITransaction>,
		onInvalid: SubmitErrorHandler<ITransaction>
	) => {
		console.log(onValid)
		console.log(onInvalid)
	}

	return (
		<Layout title='Transactions'>
			<div className='mt-10 sm:mt-0 w-full h-screen'>
				<div className='flex flex-col'>
					<h1 className='text-2xl font-bold text-black mb-4'>
						Add New Transaction
					</h1>

					<div className='flex space-x-10'>
						<div className='w-3/4'>
							<NewTransactionForm
								defaultData={TransactionFormDefault}
								onSubmit={onSubmitForm}
							/>
						</div>
						<div className='w-1/4'>
							<RecipientRecent />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default Transactions
