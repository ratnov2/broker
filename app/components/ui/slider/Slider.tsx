import cn from 'clsx'
import { FC } from 'react'
import { EffectCoverflow } from 'swiper'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

import Arrow from '../arrow/Arrow'
import Card from '../card-creator/Card'

import {
	initialStyleTransformIsActive,
	initialStyleTransformIsNext,
	initialStyleTransformIsPrev
} from './slider-initial.style'
import { PropsSlider } from './slider.interface'
import { useSlider } from './useSlider'

const Slider: FC<PropsSlider> = ({
	data,
	setIndex,
	sliderPerView,
	initialIdx,
	visibleNumberCard,
	setVisibleNumberCard
}) => {
	const { sliderRef, handleNext, handlePrev } = useSlider({ setIndex })

	return (
		<div className='relative'>
			<Swiper
				ref={sliderRef}
				centeredSlides={true}
				slidesPerView={sliderPerView}
				initialSlide={initialIdx}
				simulateTouch={false}
				effect={'coverflow'}
				coverflowEffect={{
					rotate: 0,
					depth: 200,
					modifier: 3,
					slideShadows: false
				}}
				modules={[EffectCoverflow]}
			>
				{data.map((el, key) => {
					return (
						<SwiperSlide key={el.number}>
							{({ isActive, isNext, isPrev }) => {
								return (
									<Card
										className={cn(
											isActive &&
												initialStyleTransformIsActive[
													sliderPerView - 1
												],
											isPrev &&
												initialStyleTransformIsPrev[
													sliderPerView - 1
												],
											isNext &&
												initialStyleTransformIsNext[
													sliderPerView - 1
												],
											`${data[key].background}`
										)}
										widthCard={sliderPerView * 88.8}
										{...el}
										styleFigure={!isActive}
										visibleNumberCard={visibleNumberCard}
										setVisibleNumberCard={
											setVisibleNumberCard
										}
									/>
								)
							}}
						</SwiperSlide>
					)
				})}
			</Swiper>

			{!sliderRef.current?.swiper.isBeginning && (
				<Arrow
					className='rotate-180 -left-4 top-32 absolute z-50'
					onClick={handlePrev}
				/>
			)}
			{!sliderRef.current?.swiper.isEnd && (
				<Arrow
					className='-right-4 top-32 absolute z-50'
					onClick={handleNext}
				/>
			)}
		</div>
	)
}

export default Slider
