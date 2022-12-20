import { ChangeEvent, FC, SubmitEvent, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export interface TransactionFormData {
	number: string
	date: string
	recipient: string
	email: string
	amount: number
	services: string
	dueDate: string
	pin: string
}

export interface TransactionFormProps {
	defaultData: TransactionFormData
	onSubmit?: (data: TransactionFormData) => void
}

const NewTransactionForm: FC = ({
	defaultData,
	onSubmit
}: TransactionFormProps) => {
	const [transaction, setTransaction] = useState<TransactionFormData>({
		...defaultData
	})

	const handleDateChange = (name: string, value: string) => {
		let formData = { ...transaction }
		formData[name] = value
		setTransaction(formData)
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		let formData = { ...transaction }
		formData[e.target.name] = e.target.value
		setTransaction(formData)
	}

	const handlerSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSubmit(transaction)
	}

	return (
		<form
			action='#'
			method='POST'
			className='bg-white px-6 py-7 overflow-hidden shadow rounded-xl'
			onSubmit={handlerSubmit}
		>
			<h3 className='mb-8 block text-xl font-bold'>Transaction</h3>
			<div className='grid grid-cols-2 gap-8 rounded-md'>
				<div>
					<label
						htmlFor='number'
						className='block text-sm text-gray font-thin'
					>
						Transaction Number
					</label>
					<input
						type='text'
						name='number'
						id='number'
						autoComplete='number'
						className='mt-5 block w-full rounded-full leading-3 text-base font-semibold border border-transparent bg-light-gray px-8 py-5'
						value={transaction.number}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label
						htmlFor='date'
						className='block text-sm text-gray font-thin'
					>
						Date
					</label>
					<DatePicker
						type='date'
						name='date'
						id='date'
						className='mt-5 block w-full h-15 rounded-full leading-3 text-base font-semibold border border-transparent bg-light-gray px-8 py-5'
						selected={transaction.date}
						dateFormat="dd.mm.yyyy"
						onChange={(selectedDate: string) => {
							handleDateChange('dueDate', selectedDate)
						}}
					/>
				</div>

				<div>
					<label
						htmlFor='recipient'
						className='block text-sm text-gray font-thin'
					>
						Recipient
					</label>
					<input
						type='text'
						name='recipient'
						id='recipient'
						autoComplete='recipient'
						className='mt-5 block w-full h-15 rounded-full leading-3 text-base font-semibold border border-gray px-8 py-5'
						value={transaction.recipient}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label
						htmlFor='email'
						className='block text-sm text-gray font-thin'
					>
						Email
					</label>
					<input
						type='email'
						name='email'
						id='email'
						autoComplete='email'
						className='mt-5 block w-full h-15 rounded-full leading-3 text-base font-semibold border border-gray px-8 py-5'
						value={transaction.email}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label
						htmlFor='amount'
						className='block text-sm text-gray font-thin'
					>
						Amount
					</label>
					<input
						type='text'
						name='amount'
						id='amount'
						autoComplete='amount'
						className='mt-5 block w-full h-15 rounded-full leading-3 text-base font-semibold border border-gray px-8 py-5'
						value={transaction.amount}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label
						htmlFor='services'
						className='block text-sm text-gray font-thin'
					>
						Services
					</label>
					<input
						type='services'
						name='services'
						id='services'
						autoComplete='services'
						className='mt-5 block w-full h-15 rounded-full leading-3 text-base font-semibold border border-gray px-8 py-5'
						value={transaction.services}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label
						htmlFor='dueDate'
						className='block text-sm text-gray font-thin'
					>
						Due Date
					</label> 
					<DatePicker 
						name='dueDate'
						id='dueDate'
						className='mt-5 block w-full h-15 rounded-full leading-3 text-base font-semibold border border-transparent bg-light-gray px-8 py-5'
						selected={transaction.dueDate}
						dateFormat="dd.mm.yyyy"
						onChange={(selectedDate: string) => {
							handleDateChange('dueDate', selectedDate)
						}}
					/>
				</div>

				<div>
					<label
						htmlFor='pin'
						className='block text-sm text-gray font-thin'
					>
						Pin
					</label>
					<input
						type='password'
						name='pin'
						id='pin'
						autoComplete='pin'
						className='mt-5 block w-full h-15 rounded-full leading-3 text-base font-semibold border border-gray px-8 py-5'
						value={transaction.pin}
						onChange={handleChange}
					/>
				</div>

				<div className='col-span-2 flex justify-end gap-3 text-right'>
					<div className='w-[300px]'>
						<input
							type='checkbox'
							name='checkbox'
							id='checkbox'
							className='mr-3'
						/>
						<label htmlFor='checkbox'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit
						</label>
					</div>
					<button className='py-2 px-6 w-[40%] bg-purple text-white rounded-full'>
						Submit
					</button>
				</div>
			</div>
		</form>
	)
}

export default NewTransactionForm
