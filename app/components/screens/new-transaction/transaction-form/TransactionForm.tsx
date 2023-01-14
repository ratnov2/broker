import { FC } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { SubmitHandler, useForm } from 'react-hook-form';



import { IUserContact } from '@/shared/types/user.interface';



import { ITransaction } from '../new-transaction.interface';
import Input from '../ui/input';



import { ITransactionInput, ITransactionInputs } from './transaction-from.interface';


interface ITransactionForm {
	onSubmit: SubmitHandler<ITransaction>
	selectedRecipient?: IUserContact
	data: ITransaction
	userContacts?: IUserContact[]
}

const TransactionForm: FC<ITransactionForm> = ({
	onSubmit,
	selectedRecipient,
	data,
	userContacts
}) => {

	const { register, handleSubmit, formState: { errors }, setValue } = useForm<ITransaction>({ defaultValues: data })

	function fillData(data: IUserContact | undefined) {
		if (data) {
			setValue('recipient', data.name)
		}
	}

	fillData(selectedRecipient)

	return (
		<div className='w-2/3  bg-white p-10 rounded-3xl'>
			<h1 className='text-xl font-bold text-black mb-4'>Transaction</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-2 w-full gap-8'
			>
				{/* {ITransactionInputs.map(input => (
					<Input
						register={register}
						title={input.title}
						errors={errors}
						placeholder={input.placeholder}
						fieldId={input.fieldId}
						isDisabled={input.isDisabled}
						type={input.type}
					/>
				))} */}
				<Input
					register={register}
					title={'Transcation Number'}
					errors={errors}
					placeholder={'#123-456789'}
					fieldId={'number'}
					isDisabled={true}
				/>
				<Input
					register={register}
					title={'Date'}
					errors={errors}
					placeholder={'Transaction date'}
					fieldId={'date'}
					isDisabled={true}
				/>
				<Input
					register={register}
					title={'Recipient'}
					errors={errors}
					placeholder={'Select Recipient..'}
					fieldId={'recipient'}
					isDisabled={false}
				/>
				<Input
					register={register}
					title={'Invoice'}
					errors={errors}
					placeholder={'Select invoice..'}
					fieldId={'invoice'}
					isDisabled={false}
				/>
				<Input
					register={register}
					title={'Amount'}
					errors={errors}
					placeholder={'Transaction amount'}
					fieldId={'amount'}
					isDisabled={false}
				/>
				<Input
					register={register}
					title={'Services'}
					errors={errors}
					placeholder={'Select service..'}
					fieldId={'service'}
					isDisabled={false}
				/>
				<Input
					register={register}
					title={'Due Date'}
					errors={errors}
					placeholder={'Select date'}
					fieldId={'dueDate'}
					isDisabled={false}
				/>
				<Input
					register={register}
					title={'Pin'}
					errors={errors}
					placeholder={'Your Pin'}
					fieldId={'pin'}
					isDisabled={false}
					type={'password'}
				/>
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