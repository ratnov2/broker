import { IInvoice } from './invoice.types';
import { IUser } from './users.types';


export interface ITransaction {
	id: number
	createdAt: string
	updatedAt: string
	status: string
	amount: number
	type: string
	invoiceId: number
	userId: number
	user: IUser
	invoice: IInvoice
}

export interface ITransactions {
	transactions: ITransaction[]
	length: number
}