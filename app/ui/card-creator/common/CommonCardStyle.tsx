import React from 'react'

import style from '../card-creator.module.scss'
import cn from 'classnames'
import Circle from './Circle'
import Rectangle from './Rectangle'

const CommonCardStyle = () => {
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
