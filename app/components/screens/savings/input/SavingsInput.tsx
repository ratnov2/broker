import { FC, useState } from 'react'

import { ISavingsInput } from '@/screens/savings/input/savingsInput.inteface'

const SavingsInput: FC<ISavingsInput> = ({
	label,
	name,
	placeholder,
	type,
	register,
	errors
}) => {
	return (
		<div className='mb-6'>
			<label className='block text-gray-700 text-sm mb-2' htmlFor='top-up'>
				{label}
			</label>
			<input
				className='text-sm shadow appearance-none border border-red-500 rounded-3xl w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
				id={name}
				type='text'
				placeholder={placeholder}
				{...register}
			/>
			{errors[name] ? (
				<span className='block text-sm mb-2 text-red'>
					{errors[name].message}
				</span>
			) : (
				''
			)}
		</div>
	)
}

export default SavingsInput
