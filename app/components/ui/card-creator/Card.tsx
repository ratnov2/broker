import cn from 'classnames'
import React, { FC, useState } from 'react'

import { convertToHiddenNumber } from '@/utils/get-hidden-card'
import { convertMoneyToNormalize } from '@/utils/convertMoneyToNormalize'

import { TypesCardCreator } from './card-creator.interface'
import style from './card-creator.module.scss'
import CommonCardStyle from './commonStyleCard/CommonCardStyle'

const Card: FC<TypesCardCreator> = ({
	balance,
	holder,
	valid,
	number,
	styleFigure,
	className,
	widthBlock,
	visibleNumberCard,
	setVisibleNumberCard
}) => {
	return (
		<div
			className={cn(style.shareCard, className)}
			style={{ width: `calc(${widthBlock}%)` }}
		>
			<div className={cn(style.card)}>
				{!styleFigure && (
					<>
						<CommonCardStyle />
						<div className={style.balance}>
							<h3>Balance</h3>
							<p>${convertMoneyToNormalize(balance)}</p>
						</div>
						<div className={style.number}>
							<p
								onClick={() =>
									setVisibleNumberCard(!visibleNumberCard)
								}
							>
								{!visibleNumberCard
									? number
									: convertToHiddenNumber(number)}
							</p>
						</div>
						<div className={style.holder}>
							<h3>holder</h3>
							<p>{holder}</p>
						</div>
						<div className={style.valid}>
							<h3>Valid Thru</h3>
							<p>
								{valid?.month}/{valid?.year}
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Card
