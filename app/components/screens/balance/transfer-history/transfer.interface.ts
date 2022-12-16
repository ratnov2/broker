export type TypeStatus = 'pending' | 'completed' | 'canceled'

export interface ITransfer {
	image: string
	name: string
	id: number
	amount: number
	date: string
	status: TypeStatus
}
