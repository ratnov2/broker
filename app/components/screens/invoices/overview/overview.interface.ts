export interface IOverViewElement {
	overViewType:
		| 'Invoice Sent'
		| 'Paid Invoice'
		| 'Pending Invoice'
		| 'Unpaid Invoice'
	amount: number
	compare: number
	period: string
}
