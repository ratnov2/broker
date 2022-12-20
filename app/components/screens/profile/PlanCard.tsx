import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

const PlanCard = () => {
	return (
		<div className='p-8 bg-gradient-to-b from-light-blue to-purple w-96 h-96 rounded-3xl text-white'>
			<div className='flex flex-row justify-between'>
				<p className='text-base font-normal'>Your Plan</p>
				<button>
					<BiDotsHorizontalRounded size={'1.5em'} />
				</button>
			</div>
			<p className='font-bold text-3xl mt-1'>Free</p>
			<ul className='mt-8'>
				<li className='font-semibold text-base'>50 GB Storage</li>
				<li className='font-semibold text-base'>Limited Features</li>
			</ul>
			<p className=' font-normal text-xs mt-5'>
				Upgrade to Premium Plan to get more Features & Storage memory{' '}
			</p>
			<button className='bg-white text-black font-semibold text-xs mt-9 rounded-3xl px-14 py-2'>
				Upgrade Plan
			</button>
		</div>
	)
}

export default PlanCard
