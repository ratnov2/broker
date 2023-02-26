import cn from 'clsx'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Meta from '@/layout/meta/Meta'

import AuthButton from '@/ui/auth-elements/AuthButton'

import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import styles from './Login.module.scss'
import { useAuthMutations } from './useLoginMutations'

import { IAuthInput } from '@/screens/auth/auth.interface'
import LoginFields from './LoginFields'
import { ILoginInput } from './login.interface'
import Link from 'next/link'

const Login: FC = () => {
	useAuthRedirect()

	const [isReg, setIsReg] = useState(false)

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<ILoginInput>({
		mode: 'onChange'
	})

	const { isLoading, loginSync } = useAuthMutations(reset)

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		const data2 = {
			...data,
		}
		loginSync(data2)
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
					<div className='mb-10 pointer-events-none'>
						{/* <Logo /> */}
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col w-full'
					>
						{/* fields */}
						<LoginFields
							formState={formState}
							register={registerInput}
							isPasswordRequired={true}
						/>
						{/* buttons */}
						<div className='self-center mt-6 gap-y-6'>
							<AuthButton
								type='submit'
								onClick={() => setIsReg(false)}
								disabled={isLoading}
								baseStyle='primary'
							>
								Login
							</AuthButton>
						</div>
						<div className={styles.login}>
						 No account? <Link href='register'>Register</Link>
						</div>
					</form>
				</div>
			</section>
		</Meta>
	)
}

export default Login
