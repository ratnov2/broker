import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'

import { useUsers } from '@/hooks/users/useUsers'

import { IUpdateNewInvoice } from '@/services/invoices/invoices.interface'
import { InvoicesService } from '@/services/invoices/invoices.service'
import { IUserProfile } from '@/services/user/userProfile.interface'

export const useUpdateInvoice = () => {
	const { users } = useUsers()
	const [currentUser, setCurrentUser] = useState({} as IUserProfile)

	const { mutate: updateInvoice, isLoading } = useMutation(
		['add new invoice'],
		({ invoiceId, amount, recipient, items, files }: IUpdateNewInvoice) =>
			InvoicesService.addNewInvoice({
				invoiceId,
				amount,
				recipient,
				items,
				files
			}),
		{
			onSuccess(data) {
				// console.log('success', data)
			}
		}
	)

	return { updateInvoice, isLoading, users, currentUser, setCurrentUser }
}
