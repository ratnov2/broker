import { IInvoice } from '@/shared/types/invoice.types'

export interface ITransactionForm {
	id: number
	createdAt: string
	updatedAt?: string
	status?: string
	amount: number
	type?: string
	invoiceId: number
	sender: string
	recipient: string
	email: string
	service: string
	dueDate: string
	pin: string
	agreement: boolean
	invoice?: IInvoice
	options?: any
}
