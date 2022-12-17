import { FC, useState } from 'react'

import { ISavingsInput } from '@/screens/savings/input/savingsInput.inteface'

const SavingsInput: FC<ISavingsInput> = ({
	label,
	placeholder,
	type,
	value,
	onInputChange
}) => {
	const [state, setState] = useState(value)

	function onInput(event: any) {
		setState(() => event.target.value)
	}

	return (
		<div className='mb-6'>
			<label className='block text-gray-700 text-sm mb-2' htmlFor='password'>
				{label}
			</label>
			<input
				className='text-sm shadow appearance-none border border-red-500 rounded-3xl w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
				id='top-up'
				type={type}
				placeholder={placeholder}
				value={state}
				data-name={label}
				onInput={onInput}
				onChange={onInputChange}
			/>
		</div>
	)
}

export default SavingsInput
