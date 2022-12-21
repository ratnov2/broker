import cn from 'clsx'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Meta from '@/layout/meta/Meta'
import Logo from '@/layout/sidebar/Logo'

import AuthButton from '@/ui/auth-elements/AuthButton'

import styles from './Auth.module.scss'
import AuthFields from '@/screens/auth/AuthFields'
import { IAuthInput } from '@/screens/auth/auth.interface'

/* isLoading: true / false
 * Is a temporary variable needed here only for simulate disabled button (UI)
 * it's must to be replaced with dynamic logic in future
 */
const isLoading = false

const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IAuthInput>({
		mode: 'onChange'
	})

	const login = (data: any) => {
		console.log('login', data)
	}
	const register = (data: any) => {
		console.log('register', data)
	}

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data)
		if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title='Auth'>
			<section
				className={cn(
					styles.wrapper,
					'bg-light-gray min-h-screen flex flex-col items-center justify-center'
				)}
			>
				<div className='bg-white text-black shadow-sm rounded-2xl p-16 w-full max-w-xl flex flex-col items-center'>
					<div className='mb-10 pointer-events-none'>
						<Logo />
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col w-full'
					>
						{/* fields */}
						<AuthFields
							formState={formState}
							register={registerInput}
							isPasswordRequired={true}
						/>
						{/* buttons */}
						<div className='self-center mt-6 gap-y-6'>
							<AuthButton
								type='submit'
								onClick={() => setType('login')}
								disabled={isLoading}
								baseStyle='primary'
							>
								Login
							</AuthButton>
							<AuthButton
								type='submit'
								onClick={() => setType('register')}
								disabled={isLoading}
								baseStyle='secondary'
							>
								Sing Up
							</AuthButton>
						</div>
					</form>
				</div>
			</section>
		</Meta>
	)
}

export default Auth
