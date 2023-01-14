import { InputHTMLAttributes } from 'react'
import {
	FieldError,
	FieldValues,
	FormState,
	UseFormRegister
} from 'react-hook-form'

interface IInputFieldProps {
	label?: string
	error?: FieldError //| Merge<FieldError, FieldErrorsImpl<any>>
}

type TypeInputPropsField<T> = InputHTMLAttributes<HTMLInputElement> & T

export interface IInputField extends TypeInputPropsField<IInputFieldProps> {}

export interface IInputHookFormProps<T extends FieldValues> {
	register: UseFormRegister<T>
	formState: FormState<T>
}
