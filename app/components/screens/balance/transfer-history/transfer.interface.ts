import { TypeUser } from '@/shared/types/user.type'

import { IInvoice } from '../invoices-sent/invoices.interface'

export type TypeStatus = 'Pending' | 'Complete' | 'Canceled'

export interface ITransaction {
	id: number
	createdAt: string
	updatedAt: string
	status: TypeStatus
	amount: number
	type: string
	invoiceId: number
	userId: number
	user: TypeUser
	invoice: IInvoice
}

export interface ITransfers {
	transactions: ITransaction[]
	length: number
}
