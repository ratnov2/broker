import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import AuthField from '@/ui/auth-elements/AuthField'

import { validEmail } from '@/shared/regex'

import { ILoginInput } from './login.interface'

type TypeLoginFieldsProps = {
	register: UseFormRegister<any>
	formState: FormState<ILoginInput>
	isPasswordRequired?: boolean
}

const LoginFields: FC<TypeLoginFieldsProps> = ({
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
									message: 'Please enter a valid email address'
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
		</>
	)
}

export default LoginFields
