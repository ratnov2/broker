import { FC } from 'react'

type InputProps = {
	title?: string
	errors?: any
	placeholder?: string
	register: any
}

const Input: FC<InputProps> = ({ title, errors, register, placeholder }) => {
	const name = register.name
	return (
		<div className='flex flex-col space-y-2 col-span-1'>
			{title && <label className='text-gray font-thin'>{title}</label>}
			<input
				{...register}
				className='px-4 py-3 border rounded-3xl border-gray'
				placeholder={placeholder}
			/>
			{errors && <p>{errors[name]?.message}</p>}
		</div>
	)
}

export default Input
