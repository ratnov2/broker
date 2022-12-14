import React, { FC } from 'react'

import CardCreator from 'ui/card-creator/CardCreator'
import CardEars from 'ui/card-ears/CardEars'

import style from '../../card.module.scss'

import { TypesSlider } from './slider-card.interface'

const SliderCard: FC<TypesSlider> = ({ data, idx, current }) => {

	
	return (
		<div className={style.sliderCard}>
			{data.length > 1 && (
				<CardEars
					bg={data[idx - 1]?.bg || data[data.length - 1].bg}
					position='left'
				/>
			)}
			<CardCreator {...current} />
			{data.length > 2 && (
				<CardEars
					bg={data[idx + 1]?.bg || data[0].bg}
					position='right'
				/>
			)}
		</div>
	)
}

export default SliderCard
