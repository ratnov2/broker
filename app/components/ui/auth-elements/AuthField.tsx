import cn from 'clsx'
import { forwardRef } from 'react'

import { IInputField } from '@/shared/types/field.interface'

import { errorCatchMessage } from '@/api/api.helpers'

const AuthField = forwardRef<HTMLInputElement, IInputField>(
	({ label, error, type = 'text', style, className, ...rest }, ref) => {
		return (
			<div className='pb-8 relative' style={style}>
				<label className='flex flex-col gap-y-1'>
					<span className='uppercase font-bold text-xs ml-1'>{label}</span>
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
						{errorCatchMessage(error.message)}
					</div>
				)}
			</div>
		)
	}
)

AuthField.displayName = 'Field'

export default AuthField
