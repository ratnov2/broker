import React, { FC } from 'react'

import { makeMoney } from '@/utils/makeMoney'

import { LimitData } from './limit-data'

const LimitCard = () => {
	return (
		<div>
			<h3>Limit</h3>
			<div className='w-52 bg-gray h-4 rounded-full'>
				<div
					className={`bg-purple h-4 rounded-full`}
					style={{
						width: `calc(${(LimitData.now / LimitData.all) * 100}%)`
					}}
				></div>
			</div>
			<div>
				<span>${makeMoney(String(LimitData.now))}</span>
				<span className='text-purple'> / from ${makeMoney(String(LimitData.all))}</span>
			</div>
		</div>
	)
}

export default LimitCard
