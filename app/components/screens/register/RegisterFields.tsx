import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import AuthField from '@/ui/auth-elements/AuthField'

import { validEmail } from '@/shared/regex'

import { IRegisterInput } from './register.interface'

type TypeLoginFieldsProps = {
	register: UseFormRegister<any>
	formState: FormState<IRegisterInput>
	isPasswordRequired?: boolean
}

const RegisterFields: FC<TypeLoginFieldsProps> = ({
	register,
	formState: { errors },
	isPasswordRequired = false
}) => {
	return (
		<>
			<AuthField
				{...register(
					'email',
					isPasswordRequired
						? {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message:
										'Please enter a valid email address'
								}
						  }
						: {}
				)}
				label='e-mail'
				placeholder='Insert e-mail'
				error={errors.email}
			/>
			<AuthField
				{...register('password', {
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Must be at least 6 characters'
					}
				})}
				label='password'
				placeholder='Insert password'
				type='password'
				error={errors.password}
			/>
			<AuthField
				{...register('firstName', {
					required: 'First Name is required',
				})}
				label='first Name'
				placeholder='Insert firsName'
				type='string'
			/>
			<AuthField
				{...register('lastName')}
				label='last Name'
				placeholder='Insert last name(optional*)'
				type='string'
			/>
			<AuthField
				{...register('phone')}
				label='phone'
				placeholder='Insert phone(optional*)'
				type='tel'
			/>
		</>
	)
}

export default RegisterFields
