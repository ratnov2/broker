import cn from 'clsx'
import { FC } from 'react'

import { IButton } from '@/ui/button/button.interface'

import styles from './Button.module.scss'

const Button: FC<IButton> = ({
	btnType = 'primary',
	btnSize = 'small',
	btnColor = 'purple',
	className,
	children,
	...rest
}) => {
	return (
		<button
			className={cn(
				'rounded-full text-sm border py-[0.3em] px-[1em] transition-all',
				{ '!text-xs': btnSize === 'xs' },
				{ '!text-sm': btnSize === 'sm' },
				{ '!text-base': btnSize === 'base' },
				{ '!text-lg': btnSize === 'lg' },
				{ '!text-xl': btnSize === 'xl' },
				styles[btnType],
				styles[btnColor],
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
