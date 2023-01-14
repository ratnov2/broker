import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { MultiValue, SingleValue } from 'react-select'

import Button from '@/ui/button/Button'
import Select from '@/ui/select/Select'
import { ISelectOption } from '@/ui/select/select.interface'

import { useInvoices } from '@/hooks/useInvoices'

import { isMultiValue } from '@/utils/check-select-type'

import { ITransaction } from '../new-transaction.interface'
import Input from '../ui/input'
import AcceptSection from './accept-section/AcceptSection'

interface ITransactionForm {
	onSubmit: SubmitHandler<ITransaction>
	data: ITransaction
}

const TransactionForm: FC<ITransactionForm> = ({ onSubmit, data }) => {
	const { senderInvoices, isLoadingSenderInvoices } = useInvoices()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm<ITransaction>({ defaultValues: data })

	function updateFormField(fieldName: any, value?: string | number) {
		if (value) {
			setValue(fieldName, value)
		}
	}

	function updateFields(
		value: SingleValue<ISelectOption> | MultiValue<ISelectOption>
	) {
		if (value) {
			updateFormField('recipient', getInvoice(value)?.recipient.name)
			updateFormField('amount', getInvoice(value)?.amount)
			updateFormField('sender', getInvoice(value)?.sender.name)
		}
	}
	function getInvoice(
		value: SingleValue<ISelectOption> | MultiValue<ISelectOption>
	) {
		return senderInvoices?.find(
			invoice => !isMultiValue(value) && value?.value === invoice.id.toString()
		)
	}

	const selectInvoices = senderInvoices?.map(invoice => ({
		label: 'Invoice #' + invoice.id.toString() + ' ' + invoice.recipient.name,
		value: invoice.id.toString()
	}))

	const selectService = [
		{
			label: 'Web Development',
			value: 'web-development'
		},
		{
			label: 'Cleaning Service',
			value: 'cleaning-service'
		},
		{
			label: 'Server Maintenance',
			value: 'server-maintenance'
		}
	]

	return (
		<div className='w-2/3  bg-white p-10 rounded-3xl'>
			<h1 className='text-xl font-bold text-black mb-4'>Transaction</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='grid grid-cols-2 w-full gap-8'
			>
				<Input
					register={register}
					title={'Transaction Number'}
					errors={errors}
					placeholder={'#123-456789'}
					fieldId={'id'}
					isDisabled={true}
				/>
				<Input
					register={register}
					title={'Date'}
					errors={errors}
					placeholder={'Transaction date'}
					fieldId={'createdAt'}
					isDisabled={true}
				/>
				{selectInvoices && (
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Invoice</label>
						<Select
							{...register('invoice')} //, { required: `Invoice required` } -- not working
							className={`w-full h-[52px]`}
							placeholder={'Select invoice..'}
							options={selectInvoices}
							variant='secondary'
							size={'xl'}
							color={'black'}
							onChange={selectedOption => {
								updateFields(selectedOption)
							}}
						/>
						{errors && <p>{errors[`recipient`]?.message}</p>}
					</div>
				)}
				{selectService && (
					<div className='flex flex-col space-y-2 col-span-1'>
						<label className='text-gray font-thin'>Service</label>
						<Select
							{...register('service')} //, { required: `Service required` } -- not working
							className={`w-full h-[52px]`}
							placeholder={'Select service..'}
							options={selectService}
							variant='secondary'
							size={'xl'}
							color={'black'}
							onChange={selectedOption => {
								updateFields(selectedOption)
							}}
						/>
						{errors && <p>{errors[`service`]?.message}</p>}
					</div>
				)}
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
					title={'Amount'}
					errors={errors}
					placeholder={'Transaction amount'}
					fieldId={'amount'}
					isDisabled={true}
				/>
				<Input
					register={register}
					title={'Sender'}
					errors={errors}
					placeholder={''}
					fieldId={'sender'}
					isDisabled={true}
				/>
				<Input
					register={register}
					title={'Recipient'}
					errors={errors}
					placeholder={''}
					fieldId={'recipient'}
					isDisabled={true}
				/>
				<AcceptSection register={register} />
			</form>
		</div>
	)
}

export default TransactionForm
