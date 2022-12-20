import React, { FC } from 'react'
import { TiLocationOutline, TiMail, TiPhoneOutline } from 'react-icons/ti'

import PlanCard from './PlanCard'
import { IUserCard } from './profile.interface'

const UserCard: FC<{ user: IUserCard }> = ({ user }) => {
	const userInfo = [
		{
			title: 'Address',
			icon: <TiLocationOutline color='white' size='2em' />,
			text: user.address
		},
		{
			title: 'Email',
			icon: <TiMail color='white' size='2em' />,
			text: user.email
		},
		{
			title: 'Phone',
			icon: <TiPhoneOutline color='white' size='2em' />,
			text: `+${user.phone}`
		}
	]
	return (
		<div className='bg-white mt-10 rounded-3xl'>
			<div className='p-8 overflow-hidden flex flex-col grow justify-between'>
				<div className='flex gap-5 mb-5 flex-row justify-start items-start'>
					<div className='relative w-full'>
						<div className='flex relative w-full flex-wrap xl:flex-nowrap'>
							<div className='relative flex-auto'>
								<div className='flex flex-col gap-5 '>
									<div className='flex items-center '>
										<div className='avatar rounded-full bg-light-gray w-48 h-48 '></div>
										<div className='flex flex-col gap-1 ml-10'>
											<div className=' text-3xl font-bold'>
												{user.userName}
											</div>
											<span className='font-semibold text-gray text-sm'>
												{user.role} at{' '}
												<span className='text-purple'>
													Tagih
												</span>
											</span>
											<button className='bg-light-gray py-3 px-10 rounded-3xl mt-6 font-bold hover:outline hover:outline-1 hover:outline-gray'>
												Edit Profile
											</button>
										</div>
									</div>
									<div className='flex flex-row items-center pt-4 gap-10 flex-wrap'>
										{userInfo.map((user, i) => (
											<div
												className='flex items-center max-w-[260px]'
												key={i}
											>
												<div className='flex items-center gap-3'>
													<div className='rounded-full bg-purple flex justify-center items-center w-12 h-12 shrink-0'>
														{user.icon}
													</div>
													<div className='flex flex-col'>
														<span className='text-sm font-light text-gray'>
															{user.title}
														</span>
														<span className='font-bold'>
															{user.text}
														</span>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<PlanCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserCard
