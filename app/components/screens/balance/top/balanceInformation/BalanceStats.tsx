import { FC } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { IBalanceStats } from '@/screens/balance/top/interfaces/balanceStats.interface'

const BalanceStats: FC<IBalanceStats> = ({
	title,
	currentNum,
	maxNum,
	percents,
	color
}) => {
	return (
		<div
			className={`flex items-center border-2 border-[#8E8EA1] rounded-2xl p-2.5`}
		>
			<div className={'w-[70px] h-[70px]'}>
				<CircularProgressbar
					value={percents}
					text={`${percents}%`}
					styles={{
						path: {
							stroke: color
						},
						trail: {
							stroke: '#F5F5F5'
						},
						text: {
							fill: color,
							fontSize: '24px'
						}
					}}
					className={'font-semibold'}
				/>
			</div>

			<div className={'ml-3'}>
				<h4 className={'font-semibold'}>{title}</h4>
				<p>
					${currentNum} /{' '}
					<span style={{ color: color }}>from ${maxNum}</span>
				</p>
			</div>
		</div>
	)
}

export default BalanceStats
