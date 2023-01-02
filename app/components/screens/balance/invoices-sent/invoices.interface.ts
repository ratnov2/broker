import { TypeUser } from '@/shared/types/user.type'

type TypeItems = {
	id: number
	createdAt: string
	updatedAt: string
	name: string
	duration: number
	rate: number
	amount: number
	invoiceId: number
}

type TypeFiles = {
	id: number
	createdAt: string
	updatedAt: string
	name: string
	size: string
	url: string
	invoiceId: number
}

export type TypeStatus = 'Pending' | 'Complete' | 'Canceled'

export interface IInvoice {
	id: number
	createdAt: string
	updatedAt: string
	amount: number
	senderId: number
	recipientId: number
	items: TypeItems[]
	files: TypeFiles[]
	recipient: TypeUser
	sender: TypeUser
	transactions: []
	status?: TypeStatus
}
