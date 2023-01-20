import Image from 'next/image'
import { FC } from 'react'

import { IUserProfile } from '@/services/user/user-profile.interface'

type TypeClientContact = {
	currentUser: IUserProfile
}

const ClientContact: FC<TypeClientContact> = ({ currentUser }) => (
	<div>
		<div className='flex mb-10'>
			<div className='bg-[#6160DC] w-12 h-12 rounded-full p-3'>
				<Image src='/images/Address.svg' width={30} height={30} alt='address' />
			</div>
			<div className='ml-5 w-[202px]'>
				<span className='text-sm text-[#8E8EA1]'>Address</span>
				<p className='font-semibold mt-4'>{currentUser.address}</p>
			</div>
		</div>
		<div className='flex mb-10'>
			<div className='bg-[#6160DC] w-12 h-12 rounded-full p-3'>
				<Image src='/images/Email.svg' width={30} height={30} alt='address' />
			</div>
			<div className='ml-5 w-[202px] flex flex-col'>
				<span className='text-sm text-[#8E8EA1]'>Email</span>
				<a className='font-semibold mt-4' href='mailto:bigwindadmin@mail.com'>
					{currentUser.email}
				</a>
			</div>
		</div>
		<div className='flex mb-10'>
			<div className='bg-[#6160DC] w-12 h-12 rounded-full p-3'>
				<Image src='/images/Call.svg' width={30} height={30} alt='address' />
			</div>
			<div className='ml-5 w-[202px]'>
				<span className='text-sm text-[#8E8EA1]'>Telephone</span>
				<p className='font-semibold mt-4'>(012) 3456 789</p>
			</div>
		</div>
	</div>
)

export default ClientContact
