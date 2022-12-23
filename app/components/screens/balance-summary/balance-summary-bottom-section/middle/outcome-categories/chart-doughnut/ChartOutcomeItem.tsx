import { tailwindColors } from '@/utils/tailwind-colors.type'
import { FC } from 'react'
import { categoriesDataType } from '../outcome-categories.interface'



type ChartOutcomeItemProps = {
	data: categoriesDataType
}

const ChartOutcomeItem: FC<ChartOutcomeItemProps> = ({ data }) => {
	return (
		<li className='flex justify-between'>
			<div className='flex items-center gap-3'>
				<div
					className='h-4 w-4 rounded-full'
					style={{
						backgroundColor: tailwindColors[data.color]
					}}
				/>
				<div>
					<span>{data.name}</span>
					<span>
						{' '}
						({data.data}
						%)
					</span>
				</div>
			</div>
			<div className='font-bold'> {data.transactions}</div>
		</li>
	)
}

export default ChartOutcomeItem
