import cn from 'clsx'
import { FC } from 'react'

import { convertToHiddenNumber } from '@/utils/get-hidden-card'
import { convertMoneyToNormalize } from '@/utils/convert-money-to-normalize'

import { PropsCard } from './card.interface'
import style from './Card.module.scss'
import CommonCardStyle from './common-style-card/CommonCardStyle'

const Card: FC<PropsCard> = ({
	userCard,
	styleFigure,
	className,
	widthCard,
	visibleNumberCard,
	setVisibleNumberCard
}) => {
	const {background,balance,expireDate,number} = userCard
	return (
		<div
			className={cn(style.shareCard, className, styleFigure && 'pointer-events-none')}
			style={{ width: `calc(${widthCard}%)` }}
		>
			<div className={cn(style.card)} style={{background:background}}>
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
							<p>Holder</p>
						</div>
						<div className={style.valid}>
							<h3>Valid Thru</h3>
							<p>
								{expireDate}
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Card