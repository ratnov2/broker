import { IInvoice} from './invoice.types'
import { IUser } from "./user.interface";


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
	date: string
	location: string
}