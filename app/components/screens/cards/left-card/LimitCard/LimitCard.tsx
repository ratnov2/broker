import { FC } from 'react'

import { convertMoneyToNormalize } from '@/utils/convert-money-to-normalize'

import { PropsLimitCard } from './limit-card.interface'

const LimitCard: FC<PropsLimitCard> = ({ limit }) => {
	const { all, now } = limit

	return (
		<div>
			<h3>Limit</h3>
			<div className='w-52 bg-gray h-4 rounded-full'>
				<div
					className={`bg-purple h-4 rounded-full`}
					style={{
						width: `calc(${(now / all) * 100}%)`
					}}
				></div>
			</div>
			<div>
				<span>${convertMoneyToNormalize(now)}</span>
				<span className='text-purple'>
					{' '}
					/ from ${convertMoneyToNormalize(all)}
				</span>
			</div>
		</div>
	)
}

export default LimitCard
