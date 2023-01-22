import { TypeMakeOperation } from '@/services/card/bank-account.type'

export interface PropsCardActionsBlock {
	className?: string
	arrowDirection?: 'left' | 'right'
	accountNumber: string
	title?: string
	description?: string
	operation: TypeMakeOperation
}
