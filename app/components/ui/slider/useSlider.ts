import { FC, useCallback, useRef, useState } from 'react'
import { SwiperRef } from 'swiper/react'

import { PropsUseSlider } from './slider.interface'

export const useSlider = ({ setIdx }: PropsUseSlider) => {
	const sliderRef = useRef<SwiperRef>(null)

	const handlePrev = useCallback(() => {
		sliderRef.current && setIdx(sliderRef.current?.swiper.activeIndex - 1)
		sliderRef.current?.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		sliderRef.current && setIdx(sliderRef.current?.swiper.activeIndex + 1)
		sliderRef.current?.swiper.slideNext()
	}, [])

	return { sliderRef, handleNext, handlePrev }
}
