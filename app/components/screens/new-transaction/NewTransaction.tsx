import { FC, useState } from 'react';



import Layout from '@/layout/Layout';



import { ITransactionData } from '@/shared/types/transaction.types';



import { useUserContacts } from '@/hooks/useUserContacts';



import { convertDate } from '@/utils/convert-date';



import { ITransaction } from './new-transaction.interface';
import RecipientDetails from './recipient-details/RecipientDetails';
import TransactionForm from './transaction-form/TransactionForm';
import { TransactionService } from '@/services/transactions/transactions.service';


const NewTransaction: FC = () => {
	const { userContacts, isLoadingUserContacts } = useUserContacts()
	const [selectedRecipientId, setSelectedRecipientId] = useState<
		Number | undefined
	>(userContacts && userContacts[0].id)

	const onSubmit = async (data: ITransaction) => {
		if (data.agreement && data.amount > 0) {
			const updateData: ITransactionData = {
				invoice: data.invoiceId
			}
			await TransactionService.createTransaction(updateData).finally(() => {
				alert(`Transaction for invoice #${updateData.invoice} created`)
			})
		}
	}

	const selectedRecipient = userContacts?.find(
		contact => contact.id === selectedRecipientId
	)

	const NewTransactionInputs: ITransaction = {
		id: 123456,
		createdAt: convertDate(new Date().toISOString())[0],
		sender: '',
		recipient: selectedRecipient?.name || '',
		email: selectedRecipient?.email || '',
		amount: 0,
		service: 'Web Development',
		dueDate: convertDate(new Date().toISOString())[0],
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
						<TransactionForm onSubmit={onSubmit} data={newTransactionData} />
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