import { FC } from 'react'

import Layout from '@/layout/Layout'

import RecentRecipients from '@/ui/recent-recipients/RecentRecipients'

import { usePUserContacts } from '@/hooks/useUserContacts'

import { ITransaction } from './new-transaction.interface'
import TransactionForm from './transaction-form/TransactionForm'

const NewTransaction: FC = () => {
	const { userContacts, isLoadingUserContacts } = usePUserContacts()
	const onSubmit = (data: ITransaction) => {
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
							<RecentRecipients
								slidesPerView={3}
								userContacts={userContacts}
								isLoading={isLoadingUserContacts}
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default NewTransaction
