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
						<div className='w-1/3 gap-8 bg-white p-10 rounded-3xl'>
							<RecipientsSwiper
								slidesPerView={3}
								userContacts={userContacts}
								isLoading={isLoadingUserContacts}
								setSelectedRecipientId={setSelectedRecipientId}
							/>
							<RecipientDetails
								selectedRecipient={userContacts?.find(
									contact => contact.id === selectedRecipientId
								)}
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default NewTransaction
