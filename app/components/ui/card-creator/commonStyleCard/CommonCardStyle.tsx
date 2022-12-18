import cn from 'clsx'

import Circle from './Circle'
import Rectangle from './Rectangle'
import style from './common-style-card.module.scss'
import { FC } from 'react'

const CommonCardStyle:FC = () => {
	return (
		<>
			<div className={cn(style.rectangleGroup)}>
				<Rectangle />
				<Rectangle />
			</div>
			<div className={style.circleGroup}>
				<Circle />
				<Circle />
			</div>
		</>
	)
}

export default CommonCardStyle
