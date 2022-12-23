import { FC } from 'react'

import CardActionBlock from '@/ui/card-action-block/CardActionBlock'

import style from './CardActions.module.scss'
import { cardActionsData } from './card-actions.data'

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
