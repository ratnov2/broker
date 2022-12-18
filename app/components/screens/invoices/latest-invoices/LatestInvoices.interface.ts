export interface ILatestInvoice {
	recipientAvatar: string
	name: string
	email: string
	invoiceNum: string
	service: string
	date: string
	status: 'Sent' | 'Unpaid' | 'Paid' | 'Pending'
}
