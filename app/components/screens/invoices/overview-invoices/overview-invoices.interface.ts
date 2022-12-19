export interface IOverviewInvoice {
	overviewType:
		| 'Invoice Sent'
		| 'Paid Invoice'
		| 'Pending Invoice'
		| 'Unpaid Invoice'
	amount: number
	compare: number
	period: string
}
