import cn from 'clsx'
import { FC } from 'react'
import { EffectCoverflow } from 'swiper'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

import { BackgroundColorBank } from '@/utils/background-color-bank'
import { NormalizeNumberCard } from '@/utils/normalize-number-card'

import Arrow from '../arrow/Arrow'
import Card from '../card/Card'

import {
	initialStyleTransformIsActive,
	initialStyleTransformIsNext,
	initialStyleTransformIsPrev
} from './slider-initial.style'
import { PropsSlider } from './slider.interface'
import { useSlider } from './useSlider'

const Slider: FC<PropsSlider> = ({
	userCards,
	setIndex,
	sliderPerView,
	initialIndex,
	visibleNumberCard,
	setVisibleNumberCard
}) => {
	const { sliderRef, handleNext, handlePrev } = useSlider({ setIndex })

	const userCardsStyle = userCards.map(card => ({
		...card,
		number: NormalizeNumberCard(card.number),
		background: BackgroundColorBank(card.bankName)
	}))

	return (
		<div className='relative'>
			<Swiper
				ref={sliderRef}
				centeredSlides={true}
				slidesPerView={sliderPerView}
				initialSlide={initialIndex}
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
				{userCardsStyle.map((card, key) => {
					return (
						<SwiperSlide key={card.number}>
							{({ isActive, isNext, isPrev }) => {
								return (
									<Card
										className={cn(
											isActive &&
												initialStyleTransformIsActive[sliderPerView - 1],
											isPrev && initialStyleTransformIsPrev[sliderPerView - 1],
											isNext && initialStyleTransformIsNext[sliderPerView - 1],
											`${userCardsStyle[key].background}`
										)}
										widthCard={sliderPerView * 88.8}
										userCard={card}
										styleFigure={!isActive}
										visibleNumberCard={visibleNumberCard}
										setVisibleNumberCard={setVisibleNumberCard}
									/>
								)
							}}
						</SwiperSlide>
					)
				})}
			</Swiper>

			{!sliderRef.current?.swiper.isEnd && (
				<Arrow className='-right-4 top-32 absolute z-50' onClick={handleNext} />
			)}
			{!sliderRef.current?.swiper.isBeginning && (
				<Arrow
					className='rotate-180 -left-4 top-32 absolute z-50'
					onClick={handlePrev}
				/>
			)}
		</div>
	)
}

export default Slider
