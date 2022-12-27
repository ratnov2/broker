export interface IRecipient {
	recipientAvatar: string
	name: string
	email: string
}

export interface ITransaction {
	_id: number
	recipient: IRecipient
	invoiceNum: string
	date: string
	amount: string
	location: string
	status: string
}

export interface ILatestInvoice {
	_id: number
	recipientAvatar: string
	name: string
	email: string
	invoiceNum: string
	invoiceDate: string
	service: string
	date: string
	status: string
}
