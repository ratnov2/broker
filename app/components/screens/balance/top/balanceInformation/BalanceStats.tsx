import { FC } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface balanceStats {
	title: string
	currentNum: number
	maxNum: number
	percents: number
	color: string
}

const BalanceStats: FC<balanceStats> = ({
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
						// Customize the path, i.e. the "completed progress"
						path: {
							// Path color
							stroke: color
						},
						// Customize the circle behind the path, i.e. the "total progress"
						trail: {
							// Trail color
							stroke: '#F5F5F5'
						},
						// Customize the text
						text: {
							// Text color
							fill: color,
							// Text size
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
