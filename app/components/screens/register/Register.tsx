import cn from 'clsx'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Meta from '@/layout/meta/Meta'

import AuthButton from '@/ui/auth-elements/AuthButton'

import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import styles from './Register.module.scss'
import { useAuthMutations } from './useRegisterMutations'

import { IAuthInput } from '@/screens/auth/auth.interface'
import RegisterFields from './RegisterFields'
import { IRegisterInput } from './register.interface'
import Link from 'next/link'

const Register: FC = () => {
	//useAuthRedirect()

	const [isReg, setIsReg] = useState(false)

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<IRegisterInput>({
		mode: 'onChange'
	})

	const { isLoading, registerSync } = useAuthMutations(reset)

	const onSubmit: SubmitHandler<IRegisterInput> = data => {
		registerSync(data)
	}

	return (
		<Meta title='Login'>
			<section
				className={cn(
					styles.wrapper,
					'bg-light-gray min-h-screen flex flex-col items-center justify-center'
				)}
			>
				<div className='bg-white text-black shadow-sm rounded-2xl p-16 w-full max-w-xl flex flex-col items-center'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col w-full'
					>
						{/* fields */}
						<RegisterFields
							formState={formState}
							register={registerInput}
							isPasswordRequired={true}
						/>
						{/* buttons */}
						<div className='self-center mt-6 gap-y-6'>
							<AuthButton
								type='submit'
								onClick={() => setIsReg(true)}
								disabled={isLoading}
								baseStyle='secondary'
							>
								Register
							</AuthButton>
						</div>
						<div className={styles.register}>
							Have an account? <Link href='login'>Login</Link>
						</div>
					</form>
				</div>
			</section>
		</Meta>
	)
}

export default Register
