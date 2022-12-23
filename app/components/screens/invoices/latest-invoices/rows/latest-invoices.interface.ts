import { Dispatch, SetStateAction } from 'react'

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

export interface ILatestInvoices {
	latestInvoices: ILatestInvoice[]
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}
