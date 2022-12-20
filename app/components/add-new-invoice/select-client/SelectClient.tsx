import Image from 'next/image'
import { useState } from 'react'

import style from './SelectClient.module.scss'

const clients = [
	{
		id: 0,
		name: 'Double Red',
		type: 'Fashion'
	},
	{
		id: 1,
		name: 'Infinite Studio',
		type: 'Creative Agency'
	},
	{
		id: 2,
		name: 'Refrix',
		type: 'CarWash'
	},
	{
		id: 3,
		name: 'Wezeo',
		type: 'Hybrid Development'
	},
	{
		id: 4,
		name: 'Craft',
		type: 'Build'
	},
	{
		id: 5,
		name: 'Focus',
		type: 'Sport'
	}
]

const SelectClient = () => {
	const [isActive, setIsActive] = useState(false)
	const [currentClient, setCurrentClient] = useState(clients[0])

	const openDropDown = () => {
		setIsActive(current => !current)
	}

	const handleClient = (id: number) => {
		setCurrentClient(clients[id])
		setIsActive(false)
	}

	return (
		<>
			<span className='text-sm text-[#8E8EA1]'>Select Client</span>
			<div className='border mt-4 py-3.5 pl-5 pr-7 rounded-[118px] border-gray w-fit mb-10  flex items-center relative'>
				<Image
					src='/images/companyLogo.png'
					width={68}
					height={68}
					alt='address'
					className='mr-4'
				/>
				<div className='mr-9'>
					<h2 className='text-xl font-bold mb-1'>
						{currentClient.name}
					</h2>
					<span className='text-sm text-[#8E8EA1]'>
						{currentClient.type}
					</span>
				</div>
				<div>
					<Image
						src='/images/ArrowDropDown.svg'
						width={21}
						height={13}
						alt='address'
						onClick={openDropDown}
						className={`cursor-pointer ${
							isActive ? 'origin-center rotate-180' : ''
						}`}
					/>
				</div>
				{isActive ? (
					<div
						className={`absolute left-0 top-[105%] w-full bg-white border rounded-[40px] overflow-auto max-h-[200px] ${style.dropMenu}`}
					>
						<ul>
							{clients.map(client => (
								<li
									key={client.id}
									className='flex items-center justify-between py-3.5 pl-5 pr-7 hover:bg-purple hover:text-white first:rounded-t-[40px] last:rounded-b-[40px] ease-in-out duration-300 cursor-pointer'
									onClick={() => handleClient(client.id)}
								>
									<Image
										src='/images/companyLogo.png'
										width={20}
										height={20}
										alt='address'
									/>
									{client.name}
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</>
	)
}

export default SelectClient
