import { FC } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { SubmitHandler, useForm } from 'react-hook-form';



import { IUserContact } from '@/shared/types/user.interface';



import { ITransaction } from '../new-transaction.interface';



import styles from './TransactionForm.module.scss';
import { TransactionInputs } from './transaction-input.data';
import { ITransactionInput } from './transaction-input.interface';


interface ITransactionForm {
	onSubmit: SubmitHandler<ITransaction>
	selectedRecipient?: IUserContact
}
const TransactionForm: FC<ITransactionForm> = ({
	onSubmit,
	selectedRecipient
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm<ITransaction>({
		defaultValues: TransactionInputs.reduce(
			(a, v) => ({ ...a, [v.name]: v.options.value || '' }),
			{}
		)
	})

	return (
		<div className='w-2/3'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-2 w-full gap-8 bg-white p-10 rounded-3xl '
			>
				{TransactionInputs.map(
					(
						{ placeholder, name, options, title, type }: ITransactionInput,
						index: number
					) => (
						<div className='flex flex-col space-y-2 col-span-1' key={index}>
							{title && <label className='text-gray font-thin'>{title}</label>}
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
		</div>
	)
}

export default TransactionForm