import { FC, useState } from 'react';



import Layout from '@/layout/Layout';



import { useUserContacts } from '@/hooks/useUserContacts';



import { convertDate } from '@/utils/convert-date';



import { IDBTransaction, ITransaction } from './new-transaction.interface';
import RecipientDetails from './recipient-details/RecipientDetails';
import TransactionForm from './transaction-form/TransactionForm';


const NewTransaction: FC = () => {
	const { userContacts, isLoadingUserContacts } = useUserContacts()
	const [selectedRecipientId, setSelectedRecipientId] = useState<
		Number | undefined
	>(userContacts && userContacts[0].id)

	const onSubmit = (data: ITransaction) => {
		if (data.agreement && data.amount > 0) {
			const updateData: IDBTransaction = {
				invoiceNumber: data.invoiceId
			}
			//await TransactionService.createTransaction(updateData).finally(() => { alert(`Transaction for invoice #${updateData.invoice} created`) })
			alert(`Transaction for invoice #${updateData.invoiceNumber} created`)
		}
	}

	const selectedRecipient = userContacts?.find(
		contact => contact.id === selectedRecipientId
	)

	const NewTransactionInputs: ITransaction = {
		id: 123456,
		createdAt: convertDate('2023-01-05T12:43:06.777Z')[0],
		sender: '',
		recipient: selectedRecipient?.name || '',
		email: selectedRecipient?.email || '',
		amount: 0,
		service: 'Web Development',
		dueDate: convertDate('2023-01-05T12:43:06.777Z')[0],
		pin: '1234',
		agreement: false,
		invoiceId: 0
	}
	const [newTransactionData] = useState<ITransaction>(NewTransactionInputs)

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
							data={newTransactionData}
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