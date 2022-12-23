import { InputHTMLAttributes } from 'react'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

import { IButtonSize } from '@/ui/button/button.interface'

import { tailwindColorsType } from '@/utils/tailwindColors'

export interface IFieldProps {
	variant?: 'primary' | 'secondary' | 'tertiary'
	color?: tailwindColorsType
	dimension?: IButtonSize
	withText?: boolean
	label?: string
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
