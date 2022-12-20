import { FC } from 'react'
import {
	HiOutlineLocationMarker,
	HiOutlineMail,
	HiOutlinePhone
} from 'react-icons/hi'

import styles from './RecipientDetails.module.scss'

const RecipientDetails = () => {
	return (
		<div>
			<div className='text-sm text-gray font-thin mb-4'>
				Client Details
			</div>
			<div className='flex flex-col space-y-10'>
				<div className='flex border rounded-full px-5 py-4 space-x-4 min-w-[278px]'>
					<div className='rounded-full min-w-[68px] w-[68px] min-h-[68px] h-[68px] bg-red'></div>
					<div>
						<div className='text-xl font-bold'>Jordan Nico</div>
						<div className='text-sm text-gray font-thin'>
							Great Creative Agency
						</div>
					</div>
				</div>

				<div className='flex space-x-4'>
					<span className='flex items-center justify-center rounded-full bg-purple w-11 h-11'>
						<HiOutlineLocationMarker size={32} color='white' />
					</span>
					<div>
						<div>Address</div>
						<div>
							Franklin Avenue Street New York, ABC 5562 United
							State
						</div>
					</div>
				</div>
				<div className='flex space-x-4'>
					<span className='flex items-center justify-center rounded-full bg-purple w-11 h-11'>
						<HiOutlineMail size={32} color='white' />
					</span>
					<div>
						<div>Ebigwindadmin@mail.com</div>
						<div>bigwindadmin@bigwindadmin@mail.com.com</div>
					</div>
				</div>
				<div className='flex space-x-4'>
					<span className='flex items-center justify-center rounded-full bg-purple w-11 h-11'>
						<HiOutlinePhone size={32} color='white' />
					</span>
					<div>
						<div>Telephone</div>
						<div>(012) 3456 789</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RecipientDetails
