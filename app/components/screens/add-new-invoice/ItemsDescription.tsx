import { FC } from 'react'
import { FieldArrayWithId, UseFieldArrayRemove } from 'react-hook-form'

import Button from '@/ui/button/Button'

import { IInputHookFormProps } from '@/shared/types/field.interface'

import { TypeFormInputs } from '@/screens/add-new-invoice/AddNewInvoice'
import ItemField from '@/screens/add-new-invoice/fields/ItemField'
import { IInvoiceInput } from '@/screens/add-new-invoice/fields/item-field.interface'

type TypeInputs = {
	[key: string]: {
		name: keyof IInvoiceInput
		type: 'text' | 'number'
		error: keyof IInvoiceInput
	}
}

const inputs: TypeInputs = {
	description: { name: 'name', type: 'text', error: 'name' },
	duration: { name: 'duration', type: 'number', error: 'duration' },
	rate: { name: 'rate', type: 'number', error: 'rate' },
	amount: { name: 'amount', type: 'number', error: 'amount' }
}

type TypeItemsDescription = IInputHookFormProps<TypeFormInputs> & {
	amountsIndex?: number
	fields: FieldArrayWithId<TypeFormInputs, 'items', 'id'>[]
	remove: UseFieldArrayRemove
}

const ItemsDescription: FC<TypeItemsDescription> = ({
	formState: { errors },
	register,
	remove,
	fields
}) => {
	return (
		<div>
			<h2 className='mb-11 text-xl font-bold'>Items Description</h2>
			<div className='w-full mb-11 flex flex-col'>
				<div>
					{fields.map((field, index) => (
						<div
							className='border-b border-[#F5F5F5] font-semibold flex items-center justify-between gap-5'
							key={field.id}
						>
							<ItemField
								label={'description'}
								placeholder={`insert description`}
								{...register(`items.${index}.name`, {
									required: 'this field is required'
								})}
								error={errors?.items?.[index]?.name}
								defaultValue={field.name}
								index={index}
							/>
							<ItemField
								label={'duration (h)'}
								placeholder={`insert duration`}
								{...register(`items.${index}.duration`, {
									required: 'this field is required',
									valueAsNumber: true
								})}
								type='number'
								error={errors?.items?.[index]?.duration}
								defaultValue={field.duration}
								index={index}
							/>
							<ItemField
								label={'rate'}
								placeholder={`insert rate`}
								{...register(`items.${index}.rate`, {
									required: 'this field is required',
									valueAsNumber: true
								})}
								type='number'
								error={errors?.items?.[index]?.rate}
								defaultValue={field.rate}
								index={index}
							/>
							<ItemField
								label={'amount (USD)'}
								placeholder={`insert amount`}
								{...register(`items.${index}.amount`, {
									required: 'this field is required',
									valueAsNumber: true
								})}
								type='number'
								error={errors?.items?.[index]?.amount}
								defaultValue={field.amount}
								index={index}
							/>
							<div>
								<Button
									variant='secondary'
									type='button'
									color='red'
									onClick={() => remove(index)}
								>
									remove
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ItemsDescription
