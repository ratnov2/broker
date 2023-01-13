import { FC, SetStateAction, useState } from 'react'

import Layout from '@/layout/Layout'

import RecipientsSwiper from '@/ui/recipients-swiper/RecipientsSwiper'

import { useUserContacts } from '@/hooks/useUserContacts'

import { ITransaction } from './new-transaction.interface'
import RecipientDetails from './recipient-details/RecipientDetails'
import TransactionForm from './transaction-form/TransactionForm'

const NewTransaction: FC = () => {
	const { userContacts, isLoadingUserContacts } = useUserContacts()
	const [selectedRecipientId, setSelectedRecipientId] = useState<
		Number | undefined
	>(userContacts && userContacts[0].id)

	const onSubmit = (data: ITransaction) => {
		console.log(123)
		console.log(data)
		console.log(321)
	}

	const selectedRecipient = userContacts?.find(
		contact => contact.id === selectedRecipientId
	)

	return (
		<Layout title='Transactions'>
			<div className='mt-10 sm:mt-0 w-full h-screen'>
				<div className='flex flex-col'>
					<h1 className='text-2xl font-bold text-black mb-4'>
						Add New Transaction
					</h1>
					<div className='flex space-x-10'>
						<TransactionForm
							onSubmit={onSubmit}
							selectedRecipient={selectedRecipient}
						/>
						<RecipientDetails
							selectedRecipient={selectedRecipient}
							userContacts={userContacts}
							isLoading={isLoadingUserContacts}
							setSelectedRecipientId={setSelectedRecipientId}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default NewTransaction
