import { FC } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { useForm } from 'react-hook-form'

import { ITransactionForm } from '../ITransactionForm'
import { ITransaction } from '../TransactionType'
import { TransactionInputs } from '../data'
import Input from '../ui/input'

const NewTransactionForm: FC<ITransactionForm> = ({
	defaultData,
	onSubmit
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<ITransaction>()

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='grid grid-cols-2 w-full gap-4'
		>
			{TransactionInputs.map(inputConfig => (
				<Input
					title={inputConfig.title}
					errors={errors}
					register={register(inputConfig.name, inputConfig.options)}
				/>
			))}

			<div className='col-span-2 text-right'>
				<input
					type='submit'
					value='Send'
					className='px-10 py-3 bg-purple rounded-xl text-white font-semibold'
				/>
			</div>
		</form>
	)
}

export default NewTransactionForm
