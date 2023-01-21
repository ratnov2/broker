interface Invoice2 {
	id: number
	createdAt: Date
	updatedAt: Date
	amount: number
	senderId: number
	recipientId: number
}

interface File {
	id: number
	createdAt: Date
	updatedAt: Date
	name: string
	size: string
	url: string
	invoiceId: number
	invoice: Invoice2
}

interface User {
	email: string
	id: number
	name: string
	avatarPath: string
	address: string
}

interface Transaction {
	id: number
	createdAt: Date
	updatedAt: Date
	status: string
	amount: number
	type: string
	invoiceId: number
	userId: number
}

interface Item {
	id: number
	createdAt: Date
	updatedAt: Date
	name: string
	duration: number
	rate: number
	amount: number
	invoiceId: number
	invoice: Invoice2
}

export interface IInvoice {
	id: number
	createdAt: Date
	updatedAt: Date
	amount: number
	senderId: number
	recipientId: number
	items: Item[]
	files: File[]
	recipient: User
	sender: User
	transactions: Transaction[]
}

export interface IInvoices {
	invoices: IInvoice[]
	length: number
}
