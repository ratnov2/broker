import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

import Button from '@/ui/button/Button'

import { ITransaction } from '../../new-transaction.interface'

interface IAcceptSection {
	register: UseFormRegister<ITransaction>
}

const AcceptSection: FC<IAcceptSection> = ({ register }) => {
	return (
		<div className='flex justify-end gap-2 col-span-2'>
			<div className='flex items-start space-x-2 max-w-[30%] mt-3 mr-4'>
				<input
					className='mt-2 cursor-pointer '
					id='agreement'
					type='checkbox'
					{...register('agreement')}
				/>
				<label className='cursor-pointer' htmlFor='agreement'>
					I agree with transaction
				</label>
			</div>
			<Button
				variant='primary'
				size={'lg'}
				type='submit'
				className='px-10 py-3 bg-purple rounded-full text-white font-semibold w-[40%]'
			>
				Send
			</Button>
		</div>
	)
}

export default AcceptSection
