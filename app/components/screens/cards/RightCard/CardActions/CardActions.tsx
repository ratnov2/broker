import { FC } from 'react'

import CardActionBlock from '@/ui/card-action-block/CardActionBlock'

import { cardActionsData } from './card-actions.data'
import style from './card-actions.module.scss'

const CardActions: FC = () => {
	return (
		<div className={style.cardActions}>
			{cardActionsData.map(el => {
				return (
					<CardActionBlock
						className={el.className}
						classArrow={el.classArrow}
						textP={el.textP}
						textH1={el.textH1}
						key={el.textH1}
						link={el.link}
					/>
				)
			})}
		</div>
	)
}

export default CardActions
