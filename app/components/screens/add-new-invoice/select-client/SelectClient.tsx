import cn from 'clsx'
import Image from 'next/image'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import { avatarPath } from '@/utils/avatarPath'

import style from './SelectClient.module.scss'
import { IUserProfile } from '@/services/user/userProfile.interface'

type TypeSelectClient = {
	users: IUserProfile[]
	currentUser: IUserProfile
	setCurrentUser: Dispatch<SetStateAction<IUserProfile>>
}

const SelectClient: FC<TypeSelectClient> = ({
	users,
	currentUser,
	setCurrentUser
}) => {
	const [isActive, setIsActive] = useState(false)

	useEffect(() => setCurrentUser(users[0]), [])

	const openDropDown = () => {
		setIsActive(current => !current)
	}

	const handleClient = (id: number) => {
		setCurrentUser(users.find(user => user.id === id) || currentUser)
		setIsActive(false)
	}

	return (
		<>
			<span className='text-sm text-[#8E8EA1]'>Select Client</span>
			<div className='border mt-4 py-3.5 pl-5 pr-7 rounded-[118px] border-gray w-fit mb-10  flex items-center relative'>
				<Image
					src={avatarPath(currentUser)}
					width={68}
					height={68}
					alt='address'
					className='mr-4 rounded-full'
				/>
				<div className='mr-9'>
					<h2 className='text-xl font-bold mb-1'>{currentUser.name}</h2>
					<span className='text-sm text-[#8E8EA1]'>{currentUser.email}</span>
				</div>
				<div>
					<Image
						src='/images/ArrowDropDown.svg'
						width={21}
						height={13}
						alt='address'
						onClick={openDropDown}
						className={cn('cursor-pointer', 'origin-center', {
							'rotate-180': isActive === true
						})}
					/>
				</div>
				{isActive && (
					<div
						className={`absolute left-0 top-[110%] w-full bg-white border rounded-[40px] overflow-auto ${style.dropMenu}`}
					>
						<ul>
							{users.map(user => (
								<li
									key={user.id}
									className='flex items-center justify-between py-3.5 pl-5 pr-7 hover:bg-purple hover:text-white first:rounded-t-[40px] last:rounded-b-[40px] ease-in-out duration-300 cursor-pointer'
									onClick={() => handleClient(user.id)}
								>
									<Image
										src={avatarPath(user)}
										width={20}
										height={20}
										alt='address'
										className='rounded-full'
									/>
									{user.name}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</>
	)
}

export default SelectClient
