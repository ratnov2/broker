import { FC } from 'react'

import AuthField from '@/ui/auth-elements/AuthField'

import { validEmail } from '@/shared/regex'
import { IInputHookFormProps } from '@/shared/types/field.interface'

import { IAuthInput } from './auth.interface'

const AuthFields: FC<IInputHookFormProps<IAuthInput>> = ({
	register,
	formState: { errors }
}) => {
	return (
		<>
			<AuthField
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				})}
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

export default AuthFields
