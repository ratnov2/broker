

export interface IInvoice {
	id: number
	createdAt: string
	updatedAt: string
	amount: number
	senderId: number
	recipientId: number
	service: string
	items: IItem[]
	files: IFiles[]
	recipient: IRecipient
	sender: IRecipient
}

export interface IItem {
	id: number
	createdAt: string
	updatedAt: string
	name: string
	duration: number
	rate: number
	amount: number
	invoiceId: number
}


export interface IFiles {
	id: number
	createdAt: string
	updatedAt: string
	name: string
	size: string
	url: string
	invoiceId: number
}

export interface IRecipient {
	id: number
	email: string
	name: string
	avatarPath: string
	address: string
}

export interface IOverviewStatistic {
	sent: number
	paid: number
	pending: number
	unpaid: number
}