import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Select from '@/ui/select/Select'

import { IUserContact } from '@/shared/types/users.types'

import { useInvoices } from '@/hooks/useInvoices'

import { ITransaction } from '../new-transaction.interface'
import Input from '../ui/input'

interface ITransactionForm {
	onSubmit: SubmitHandler<ITransaction>
	selectedRecipient?: IUserContact
	data: ITransaction
}

const TransactionForm: FC<ITransactionForm> = ({
	onSubmit,
	selectedRecipient,
	data,
}) => {
	const { latestInvoices, isLoadingLatestInvoices } = useInvoices()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm<ITransaction>({ defaultValues: data })

	function updateFormField(fieldName: any, value: IUserContact | undefined) {
		if (value) {
			setValue(fieldName, value.name)
		}
	}

	updateFormField('recipient', selectedRecipient)

	function findRecipient(value: string | null) {
		return latestInvoices?.invoices?.find(
			invoice => value === invoice.id.toString()
		)?.recipient
	}

	const selectOptions = latestInvoices?.invoices?.map(invoice => ({
		label: 'Invoice #' + invoice.id.toString(),
		value: invoice.id.toString()
	}))

	return (
		<div className='w-2/3  bg-white p-10 rounded-3xl'>
			<h1 className='text-xl font-bold text-black mb-4'>Transaction</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-2 w-full gap-8'
			>
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
				{latestInvoices?.invoices && (
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Invoice</label>
						<Select
							{...register}
							className={`w-full h-[52px]`}
							placeholder={'Select invoice..'}
							options={selectOptions}
							variant='secondary'
							size={'xl'}
							color={'black'}
							onChange={value => {
								updateFormField('recipient', findRecipient('32'))
							}}
						/>
						{errors && <p>{errors[`recipient`]?.message}</p>}
					</div>
				)}
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
