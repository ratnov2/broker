import React, { FC } from 'react'

import style from '../../card.module.scss'
import Arrow from 'ui/arrow/Arrow'
import CardCreator from 'ui/card-creator/CardCreator'
import CardEars from 'ui/card-ears/CardEars'

import { TypesSlider } from './slider-card.interface'

const SliderCard: FC<TypesSlider> = ({ data, idx, current,prev,next }) => {
	return (
		<div className={style.sliderCard}>
			{data.length > 1 && (
				<>
					<CardEars
						bg={data[idx - 1]?.bg || data[data.length - 1].bg}
						position='left'
					/>
					<Arrow className='rotate-180 -left-4 top-32' onClick={prev}/>
				</>
			)}
			<CardCreator {...current} />
			{data.length > 2 && (
				<>
					<CardEars
						bg={data[idx + 1]?.bg || data[0].bg}
						position='right'
					/>
					<Arrow className='-right-4 top-32' onClick={next} />
				</>
			)}
		</div>
	)
}

export default SliderCard
