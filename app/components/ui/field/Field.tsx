import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from '@/ui/field/field.interface'

import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{
			// variant = 'primary',
			type = 'text',
			color = 'purple',
			dimension = 'sm',
			withText = false,
			className,
			style,
			label,
			error,
			...rest
		},
		ref
	) => {
		const checkboxText = ['On', 'Off']
		return (
			<label
				className={cn(
					type === 'checkbox' &&
						`${styles.checkbox} ${styles[dimension]}`
				)}
			>
				<input type={type} ref={ref} {...rest} />
				{type === 'checkbox' && (
					<>
						<div
							className={cn(
								styles.fake_input,
								styles[color],
								styles[dimension]
							)}
						/>
						{withText &&
							checkboxText.map(text => (
								<div
									className={cn(
										'absolute top-1/2 text-white -translate-y-1/2 transition-all leading-none pointer-events-none',
										{ 'text-xs': dimension === 'xs' },
										{ 'text-sm': dimension === 'sm' },
										{ 'text-base': dimension === 'base' },
										{ 'text-lg': dimension === 'lg' },
										{ 'text-xl': dimension === 'xl' },
										styles[text]
									)}
									key={text}
								>
									{text}
								</div>
							))}
					</>
				)}
			</label>
		)
	}
)

Field.displayName = 'Field'

export default Field

{
	/* 
		<div className='pb-8 relative' style={style}>
			<label className='flex flex-col gap-y-1'>
				<span className='uppercase font-bold text-xs ml-1'>
					{label}
				</span>
				<input
					ref={ref}
					type={type}
					{...rest}
					className={cn(
						'outline-none py-2 px-4 border border-gray rounded',
						className
					)}
				/>
			</label>
			{error && (
				<div className='text-red absolute bottom-1 left-1 right-1 text-right text-xs'>
					{error.message?.toString()}
				</div>
			)}
		</div> 
	*/
}
