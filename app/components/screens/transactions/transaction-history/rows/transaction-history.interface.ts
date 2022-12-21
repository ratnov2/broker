import { Dispatch, SetStateAction } from 'react';


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

export interface ITransactionHistory {
	transactions?: ITransaction[]
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}