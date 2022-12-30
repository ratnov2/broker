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
	operation?: UseMutationResult<
		AxiosResponse<any, any>,
		unknown,
		IOperations,
		unknown
	>
}

export interface PropsUseModalForm {
	accountNumber: string
	operation?: UseMutationResult<
		AxiosResponse<any, any>,
		unknown,
		IOperations,
		unknown
	>
	onClose: () => void
}
