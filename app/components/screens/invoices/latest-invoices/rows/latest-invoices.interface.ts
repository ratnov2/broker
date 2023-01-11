import { Dispatch, SetStateAction } from 'react'

import { IInvoice } from '@/shared/types/invoice.types'

export interface ILatestInvoices {
	latestInvoices?: IInvoice[]
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	maxItems: number | undefined
}
