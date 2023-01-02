import { ILatestInvoice } from '@/shared/types/invoice.types'
import { Dispatch, SetStateAction } from 'react'

export interface ILatestInvoices {
	latestInvoices?: ILatestInvoice[]
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}
