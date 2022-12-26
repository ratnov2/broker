import { FC } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'

import { TransactionType } from '../transaction-type/TransactionType'

import { ITransactionForm } from './ITransactionForm'
import {
	TransactionInputType,
	TransactionInputs
} from './TransactioinInputType'
import styles from './TransactionForm.module.scss'

const TransactionForm: FC<ITransactionForm> = ({ onSubmit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<TransactionType>({
		defaultValues: TransactionInputs.reduce(
			(a, v) => ({ ...a, [v.name]: v.options.value || '' }),
			{}
		)
	})

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='grid grid-cols-2 w-full gap-8 bg-white p-10'
		>
			{TransactionInputs.map(
				(
					{
						placeholder,
						name,
						options,
						title,
						type
					}: TransactionInputType,
					index: number
				) => (
					<div
						className='flex flex-col space-y-2 col-span-1'
						key={index}
					>
						{title && (
							<label className='text-gray font-thin'>
								{title}
							</label>
						)}
						<input
							{...register(name, options)}
							className={styles['transaction-input']}
							type={type}
							placeholder={placeholder}
						/>
						{errors && <p>{errors[name]?.message}</p>}
					</div>
				)
			)}

			<div className='flex justify-end gap-2 col-span-2'>
				<div className='flex items-start space-x-2 max-w-[30%]'>
					<input
						className='mt-2 cursor-pointer'
						id='agreement'
						type='checkbox'
						{...register('agreement')}
					/>
					<label className='cursor-pointer' htmlFor='agreement'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit
					</label>
				</div>
				<input
					type='submit'
					value='Send'
					className='px-10 py-3 bg-purple rounded-full text-white font-semibold w-[40%]'
				/>
			</div>
		</form>
	)
}

export default TransactionForm
