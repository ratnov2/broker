import { FC } from 'react'

import OverViewElement from './OverViewElement'
import { IOverViewElement } from './Overview.interface'

interface IOverView {
	overViewElements: IOverViewElement[]
	isLoading: boolean
	period: string
}

const OverView: FC<IOverView> = ({
	overViewElements,
	isLoading,
	period // Не разобрался, как прокинуть период дальше в OverViewElement вместе с overViewItem
}) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			{overViewElements.length ? (
				<>
					{overViewElements.map(overViewElement => (
						<OverViewElement
							key={overViewElement.overViewType}
							overViewElement={overViewElement}
						/>
					))}
				</>
			) : (
				<div className='h-[225px] flex items-center justify-center'>
					Invoices not found
				</div>
			)}
		</div>
	)
}

export default OverView
