export type TypeStatus = 'pending' | 'completed' | 'canceled'

export interface IInvoices {
	_id: number
	image: string
	name: string
	date: string
	status: TypeStatus
}
