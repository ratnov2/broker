import cn from 'clsx'
import { FC } from 'react'

import { IAuthButton } from '@/ui/auth-elements/auth-elements.interface'

const AuthButton: FC<IAuthButton> = ({
	children,
	className,
	baseStyle = 'primary',
	...rest
}) => {
	return (
		<button
			className={cn(
				'border rounded-md py-2 px-10 shadow-sm transition-all',
				'hover:bg-opacity-100',
				'disabled:opacity-60 disabled:pointer-events-none',
				{
					'border-transparent bg-purple bg-opacity-90 text-white':
						baseStyle === 'primary'
				},
				{
					'border-purple/90 text-purple hover:text-white hover:bg-purple':
						baseStyle === 'secondary'
				},
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default AuthButton
