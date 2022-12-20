import { FC } from 'react'

import Layout from '@/layout/Layout'

import NewTransactionForm from './new-transaction-form/NewTransactionForm'
import RecipientRecent from './recipient-recent/RecipientRecent'

const defaultFormData = {
	number: '',
	date: '',
	recipient: '',
	email: '',
	amount: '',
	services: '',
	dueDate: '',
	pin: ''
}

const Transactions: FC = () => {
	const test = defaultFormData

	const onSubmitForm = (data: TransactionFormData) =>
		alert(JSON.stringify(data))

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
								defaultData={test}
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
