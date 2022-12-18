import React, { FC } from 'react'

import { convertToHiddenNumber } from '@/utils/get-hidden-card'

import { PropsDescription } from './description-data.interface'
import style from './description.module.scss'

const Description: FC<PropsDescription> = ({
	type,
	number,
	valid,
	name,
	bank,
	visibleNumberCard
}) => {
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
					<p>{bank}</p>
				</div>
				<div>
					<h3>Name</h3>
					<p>{name}</p>
				</div>
				<div>
					<h3>Valid Thru</h3>
					<p>
						{valid.month}/{valid.year}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Description
