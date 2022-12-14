import React, { FC } from 'react'

import { descriptionData } from './description-data'
import { TypesDescription } from './description-data.interface'
import style from './description.module.scss'

const Description: FC<TypesDescription> = ({
	type,
	NCard,
	valid,
	name,
	bank
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
					<p>{NCard}</p>
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
