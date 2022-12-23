import { FieldErrors, FieldPath, UseFormRegisterReturn } from 'react-hook-form'

import { ISavingsData } from '@/screens/savings/savings.interface'

export interface ISavingsInput {
	label: string
	name: string
	placeholder: string
	type: string
	register: UseFormRegisterReturn
	errors: any
}
