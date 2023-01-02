import { TypeUser } from '@/shared/types/user.type'

import { IInvoice } from '../invoices-sent/invoices.interface'

type TypeTransferInvoice = Pick<
	IInvoice,
	'id' | 'createdAt' | 'updatedAt' | 'amount' | 'senderId' | 'recipientId'
>

export type TypeStatus = 'Pending' | 'Complete' | 'Canceled'

export interface ITransfer {
	id: number
	createdAt: string
	updatedAt: string
	status: TypeStatus
	amount: number
	type: string
	invoiceId: number
	userId: number
	user: TypeUser
	invoice: TypeTransferInvoice
}
