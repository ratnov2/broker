import { FC } from 'react'
import {
	HiOutlineLocationMarker,
	HiOutlineMail,
	HiOutlinePhone
} from 'react-icons/hi'

const RecipientDetails: FC = () => {
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

				<div className='flex space-x-4 overflow-hidden'>
					<HiOutlineLocationMarker
						size={32}
						color='white'
						className='bg-purple rounded-full w-11 h-11 min-w-11 min-h-11 p-2'
					/>
					<div>
						<div>Address</div>
						<div>
							Franklin Avenue Street New York, ABC 5562 United
							State
						</div>
					</div>
				</div>

				<div className='flex space-x-4 overflow-hidden'>
					<HiOutlineMail
						size={32}
						color='white'
						className='bg-purple rounded-full w-11 h-11 min-w-11 min-h-11 p-2'
					/>
					<div>
						<div>Ebigwindadmin@mail.com</div>
						<div>bigwindadmin@mail.com</div>
					</div>
				</div>

				<div className='flex space-x-4'>
					<HiOutlinePhone
						size={32}
						color='white'
						className='bg-purple rounded-full w-11 h-11 min-w-11 min-h-11 p-2'
					/>
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
