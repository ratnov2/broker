import { FC } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { MultiValue, SingleValue } from 'react-select'

import Select from '@/ui/select/Select'
import { ISelectOption } from '@/ui/select/select.interface'

import { IInvoice } from '@/shared/types/invoice.types'

import { useInvoices } from '@/hooks/useInvoices'

import { isMultiValue } from '@/utils/check-select-type'

import { ITransactionForm } from '../../new-transaction.interface'
import Input from '../../ui/input'

import { selectService } from './inputs-section.data'

interface IAcceptSection {
	register: UseFormRegister<ITransactionForm>
	errors?: any
	setValue: UseFormSetValue<ITransactionForm>
}

const InputsSection: FC<IAcceptSection> = ({ register, setValue, errors }) => {
	const { senderInvoices, isLoadingSenderInvoices } = useInvoices()

	function updateFormField(fieldName: any, value?: string | number) {
		if (value) {
			setValue(fieldName, value)
		}
	}

	function updateFields(
		value: SingleValue<ISelectOption> | MultiValue<ISelectOption>
	) {
		if (value) {
			updateFormField(
				'recipient',
				findInvoice(value, senderInvoices)?.recipient?.name
			)
			updateFormField('amount', findInvoice(value, senderInvoices)?.amount)
			updateFormField('sender', findInvoice(value, senderInvoices)?.sender.name)
			updateFormField('invoiceId', findInvoice(value, senderInvoices)?.id)
		}
	}

	function findInvoice(
		value: SingleValue<ISelectOption> | MultiValue<ISelectOption>,
		senderInvoices?: IInvoice[]
	) {
		return senderInvoices?.find(
			invoice => !isMultiValue(value) && value?.value === invoice.id.toString()
		)
	}

	const selectInvoices = senderInvoices
		?.filter(invoice => invoice.recipientId !== null)
		.map(invoice => ({
			label:
				'Invoice #' + invoice.id.toString() + ' ' + invoice.recipient?.name,
			value: invoice.id.toString()
		}))

	return (
		<>
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
			{(selectInvoices || isLoadingSenderInvoices) && (
				<div className='flex flex-col space-y-2 col-span-1'>
					<label className='text-gray font-thin'>Invoice</label>
					<Select
						{...register('invoice')} //, { required: `Invoice required` } -- not working
						className={`w-full h-[52px]`}
						placeholder={
							isLoadingSenderInvoices
								? 'Loading invoices..'
								: 'Select invoice..'
						}
						options={selectInvoices ? selectInvoices : undefined}
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
		</>
	)
}

export default InputsSection
