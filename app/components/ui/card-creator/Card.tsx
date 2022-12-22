import cn from 'clsx'
import { FC } from 'react'

import { convertToHiddenNumber } from '@/utils/get-hidden-card'
import { convertMoneyToNormalize } from '@/utils/convert-money-to-normalize'

import { PropsCardCreator } from './card-creator.interface'
import style from './Card.module.scss'
import CommonCardStyle from './common-style-card/CommonCardStyle'

const Card: FC<PropsCardCreator> = ({
	balance,
	holder,
	valid,
	number,
	styleFigure,
	className,
	widthCard,
	visibleNumberCard,
	setVisibleNumberCard
}) => {
	return (
		<div
			className={cn(style.shareCard, className, styleFigure && 'pointer-events-none')}
			style={{ width: `calc(${widthCard}%)` }}
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
