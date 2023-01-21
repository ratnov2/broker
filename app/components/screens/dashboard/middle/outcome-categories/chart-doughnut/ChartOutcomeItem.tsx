import { FC } from 'react'

import { onlyText } from '@/utils/clear-text'
import { tailwindColorsFiltered } from '@/utils/tailwind-colors'

import { categoriesDataType } from '@/screens/dashboard/middle/outcome-categories/outcome-categories.interface'

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
						backgroundColor: tailwindColorsFiltered[data.color]
					}}
				/>
				<div>
					<span>
						{data.name.length < 15 ? data.name : onlyText(data.name, 12)}
					</span>
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
