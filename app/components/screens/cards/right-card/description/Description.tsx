import { FC } from 'react'

import { convertToHiddenNumber } from '@/utils/get-hidden-card'

import { PropsDescription } from './description-data.interface'
import style from './Description.module.scss'

const Description: FC<PropsDescription> = ({
	userCard,
	visibleNumberCard
}) => {
	
	const {bankName,expireDate,number,type} = userCard
	return (
		<div className={style.description}>
			<h2>Card Information</h2>
			<div className={style.information}>
				<div>
					<h3>Card Name</h3>
					<p>{type}</p>
				</div>
				<div>
					<h3>Card Number</h3>
					<p>
						{!visibleNumberCard
							? number
							: convertToHiddenNumber(number)}
					</p>
				</div>
				<div>
					<h3>Bank</h3>
					<p>{bankName}</p>
				</div>
				<div>
					<h3>Name</h3>
					<p>holder</p>
				</div>
				<div>
					<h3>Valid Thru</h3>
					<p>
						{expireDate}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Description
