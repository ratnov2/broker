import { FC } from 'react'

const NewTransactionForm: FC = () => {
	return (
		<form
			action='#'
			method='POST'
			className='bg-white px-6 py-7 overflow-hidden shadow rounded-xl'
		>
			<h3 className='mb-4 block text-xl font-bold'>Transaction</h3>
			<div className='grid grid-cols-2 gap-8 rounded-md'>
				<div>
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

				<div>
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div>

				<div>
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
						className='mt-1 block w-full rounded-full text-sm font-semibold border border-gray px-4 py-3'
					/>
				</div>

				<div className='col-span-2 flex justify-end gap-3 text-right'>
					<div className="w-[300px]">
						<input type='checkbox' name='checkbox' id='checkbox' className="mr-3" />
						<label for="checkbox">Lorem ipsum dolor sit amet, consectetur adipiscing elit</label>
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
