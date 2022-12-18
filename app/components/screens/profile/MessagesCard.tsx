import React, { FC } from 'react'
import { TbPlus } from 'react-icons/tb'

import { IUserCard } from './profile.interface'

const MessagesCard: FC<{ user: IUserCard }> = ({ user }) => {
	return (
		<div className='flex bg-white mt-[54px] rounded-3xl p-8'>
			<div className='flex flex-col'>
				<h1 className='font-bold text-2xl'>Messages</h1>
				<div className='flex flex-row mt-8 h-[60px]'>
					<input
						className='rounded-3xl border p-[19px]'
						placeholder='Search here...'
					/>
					<div className='bg-purple hover:opacity-90 w-[60px] h-[60px] rounded-full ml-8 flex justify-center items-center cursor-pointer text-white'>
						<TbPlus size='2em' />
					</div>
				</div>
				<div className='flex flex-col mt-8'>
					{user.userMessages.map(userMessage => (
						<ul className='flex flex-col' key={userMessage.name}>
							<div className='flex flex-row justify-between'>
								<div className='flex justify-start'>
									<div className='bg-light-gray w-[60px] h-[60px] rounded-full'></div>
									<div className='flex flex-col mb-8 ml-4'>
										<span className='font-bold text-sm'>
											{userMessage.name}
										</span>
										<span className='font-normal text-xs text-gray'>
											{userMessage.text}
										</span>
									</div>
								</div>
								<div className='flex flex-col'>
									<span className='font-normal text-xs text-gray'>
										{userMessage.time}
									</span>
									{userMessage.value > 1 ? (
										<span className='inline-flex justify-center items-center self-end ml-2 mt-1 w-6 h-6 text-xs font-normal text-white bg-red rounded-full'>
											{userMessage.value}
										</span>
									) : (
										''
									)}
								</div>
							</div>
						</ul>
					))}
					<button className='bg-[#F0EFFC] rounded-3xl text-center py-2 text-purple font-bold hover:outline hover:outline-1 hover:outline-purple'>
						View More
					</button>
				</div>
			</div>
		</div>
	)
}

export default MessagesCard
