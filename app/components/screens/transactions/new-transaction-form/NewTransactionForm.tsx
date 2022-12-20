import { FC } from 'react'

const NewTransactionForm: FC = () => {
	return (
		<form
			action='#'
			method='POST'
			className='bg-white px-6 py-7 overflow-hidden shadow rounded-xl'
		>
			<h3 className='mb-4 block text-xl font-bold'>Transaction</h3>
			<div className='rounded-md grid grid-cols-6 gap-6'>
				<div className='col-span-6 sm:col-span-3'>
					<label
						htmlFor='transactionNumber'
						className='block text-sm text-gray font-thin'
					>
						Transaction Number
					</label>
					<input
						type='text'
						name='transactionNumber'
						id='transactionNumber'
						autoComplete='transactionNumber'
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-transparent bg-light-gray px-4 py-3'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3'>
					<label
						htmlFor='date'
						className='block text-sm text-gray font-thin'
					>
						Date
					</label>
					<input
						type='date'
						name='date'
						id='date'
						autoComplete='date'
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-transparent bg-light-gray px-4 py-3'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3'>
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3'>
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3'>
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3'>
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3'>
					<label
						htmlFor='dueDate'
						className='block text-sm text-gray font-thin'
					>
						Due Date
					</label>
					<input
						type='date'
						name='dueDate'
						id='dueDate'
						autoComplete='dueDate'
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div>

				<div className='col-span-6 sm:col-span-3'>
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div> 
				<div className='col-span-6 sm:col-span-3'>
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div> 
			</div>
		</form>
	)
}

export default NewTransactionForm
