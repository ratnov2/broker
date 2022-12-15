export interface ITransfer {
	image: string
	name: string
	id: number
	amount: number
	date: string
	status: 'pending' | 'completed' | 'canceled'
}
