import { FC } from 'react'

import { ITransactionInput } from '../transaction-form/transaction-from.interface'

const Input: FC<ITransactionInput> = ({
	register,
	errors,
	title,
	fieldId,
	errorMsg,
	type,
	placeholder,
	isDisabled
}) => {
	return (
		<div className='flex flex-col space-y-2 col-span-1'>
			{title && <label className='text-gray font-thin'>{title}</label>}
			<input
				{...register(`${fieldId}`, { required: `${errorMsg}` })}
				className={`px-4 py-3 border-gray rounded-3xl font-bold ${
					isDisabled ? 'border-none text-gray' : 'border'
				}`}
				type={type}
				placeholder={placeholder}
				disabled={isDisabled}
			/>
			{errors && <p>{errors[`${fieldId}`]?.message}</p>}
		</div>
	)
}

export default Input
