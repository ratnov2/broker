import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ITransaction } from '../new-transaction.interface'

import AcceptSection from './accept-section/AcceptSection'
import InputsSection from './inputs-section/InputsSection'

interface ITransactionForm {
	onSubmit: SubmitHandler<ITransaction>
	data: ITransaction
}

const TransactionForm: FC<ITransactionForm> = ({ onSubmit, data }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm<ITransaction>({ defaultValues: data })

	return (
		<div className='w-2/3  bg-white p-10 rounded-3xl'>
			<h1 className='text-2xl font-bold text-black mb-4'>Transaction</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-2 w-full gap-8'
			>
				<InputsSection
					register={register}
					setValue={setValue}
					errors={errors}
				/>
				<AcceptSection register={register} />
			</form>
		</div>
	)
}

export default TransactionForm
