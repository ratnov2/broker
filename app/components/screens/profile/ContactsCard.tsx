import React, { FC } from 'react'
import { TbPlus } from 'react-icons/tb'
import { TiMail } from 'react-icons/ti'

import { IUserCard } from './profile.interface'

const ContactsCard: FC<{ user: IUserCard }> = ({ user }) => {
	return (
		<div className='flex bg-white mt-[54px] rounded-3xl max-w-md p-8'>
			<div className='flex flex-col'>
				<h1 className='font-bold text-2xl'>Contacts</h1>
				<span className='text-gray'>
					You have <b className='text-black'>{user.totalContacts}</b>{' '}
					contacts
				</span>
				<div className='flex flex-row mt-8 h-[60px]'>
					<input
						className='rounded-3xl border p-[19px]'
						placeholder='Search here...'
					/>
					<div className='bg-purple w-[60px] h-[60px] rounded-full ml-8 flex justify-center items-center cursor-pointer'>
						<TbPlus size='2em' />
					</div>
				</div>
				<div className='flex flex-col mt-8 '>
					{user.userContacts.map(userContact => (
						<ul className='flex flex-col' key={userContact.name}>
							<div className='flex flex-row justify-between'>
								<div className='flex justify-start'>
									<div className='bg-light-gray w-[60px] h-[60px] rounded-full'></div>
									<div className='flex flex-col mb-8 ml-4'>
										<span className='font-bold text-sm'>
											{userContact.name}
										</span>
										<span className=' font-normal text-xs'>
											{userContact.class}
										</span>
									</div>
								</div>
								<div className='border-2 border-gray rounded-full w-[60px] h-[60px] flex justify-center items-center cursor-pointer text-gray hover:bg-purple hover:border-none hover:text-white'>
									<TiMail size='2em' />
								</div>
							</div>
						</ul>
					))}
					<button className='bg-[#F0EFFC]  rounded-3xl text-center py-2 text-purple font-bold hover:outline hover:outline-1 hover:outline-purple'>
						View More
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContactsCard
