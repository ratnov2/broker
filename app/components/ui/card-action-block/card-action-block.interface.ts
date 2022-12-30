import { AxiosResponse } from 'axios'
import { UseMutationResult } from 'react-query'

import { IOperations } from '@/shared/types/bank-accounts.interface'

export interface PropsCardActionsBlock {
	className?: string
	arrowDirection?: 'left' | 'right',
	accountNumber:string
	title?: string
	description?: string
	operation?: UseMutationResult<
		AxiosResponse<any, any>,
		unknown,
		IOperations,
		unknown
	>
}
