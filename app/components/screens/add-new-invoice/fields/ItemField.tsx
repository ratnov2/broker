import cn from 'clsx'
import { forwardRef } from 'react'

import { IInputField } from '@/shared/types/field.interface'

type TypeExtaInputFields = {
	index?: number
}

const ItemField = forwardRef<
	HTMLInputElement,
	IInputField & TypeExtaInputFields
>(
	(
		{ index = 0, label, error, type = 'text', style, className, ...rest },
		ref
	) => {
		return (
			<div className='relative'>
				{!index && (
					<div className='font-normal text-gray text-xs text-left'>{label}</div>
				)}
				<div className='py-4'>
					<input
						ref={ref}
						type={type}
						{...rest}
						className={cn('outline-none w-full text-black', className)}
					/>
				</div>
				{error && (
					<div className='text-red absolute font-normal -bottom-1 left-0 right-0 text-left text-xs'>
						{error.message}
					</div>
				)}
			</div>
		)
	}
)

ItemField.displayName = 'ItemField'

export default ItemField
