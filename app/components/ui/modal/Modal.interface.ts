import { AxiosResponse } from 'axios'
import { ReactNode } from 'react'
import { UseMutationResult } from 'react-query'

import { IOperations } from '@/shared/types/bank-accounts.interface'

export interface PropsModal {
	show: boolean
	onClose: () => void
	accountNumber: string
	title?: string
	children: ReactNode
	operation: 'topUp' | 'withdrawal' | string
}

export interface PropsUseModalForm {
	accountNumber: string
	operationQuery?: UseMutationResult<
		AxiosResponse<any, any>,
		unknown,
		IOperations,
		unknown
	>
	operation: string
	onClose: () => void
}
