import { FC } from 'react'

import CardActionBlock from '@/ui/card-action-block/CardActionBlock'

import { cardActionsData } from './card-actions.data'
import style from './CardActions.module.scss'

const CardActions: FC = () => {
	return (
		<div className={style.cardActions}>
			{cardActionsData.map(el => {
				return (
					<CardActionBlock
						className={el.className}
						arrowDirection={el.arrowDirection}
						description={el.description}
						title={el.title}
						link={el.link}
						key={el.title}
					/>
				)
			})}
		</div>
	)
}

export default CardActions
