import { FC } from 'react'

type InputProps = {
	title?: string
	errors?: any
	register: any
}

const Input: FC<InputProps> = ({ title, errors, register }) => {
	const name = register.name
	console.log(errors, name, errors[name]?.message)
	return (
		<div className='flex flex-col space-y-2 col-span-1'>
			{title && <label className='text-gray font-thin'>{title}</label>}
			<input
				{...register}
				className='px-4 py-3 border rounded-2xl border-gray'
			/>
			{errors && <p>{errors[name]?.message}</p>}
		</div>
	)
}

export default Input
