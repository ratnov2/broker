import { useEffect, useState } from 'react'

import { IUserCard } from '@/shared/types/bank-accounts.interface'

import { SliderInitialIdx } from '@/utils/slider/slider-initial-index'
import { SliderPerView } from '@/utils/slider/slider-per-view'

export const useInitializeSliderCard = (cards?: IUserCard[]) => {
	const [sliderPerView, setSliderPerView] = useState<number>(1)
	const [initialIndex, setInitialIndex] = useState<number>(1)

	const [index, setIndex] = useState<number>(0)
	const [currentCard, setCurrentCard] = useState<IUserCard>()
	const [visibleNumberCard, setVisibleNumberCard] = useState<boolean>(false)

	useEffect(() => {
		if (cards) {
			setCurrentCard(cards[index])
		}
	}, [index])

	useEffect(() => {
		if (cards) {
			setSliderPerView(SliderPerView(cards.length))
			setInitialIndex(SliderInitialIdx(SliderPerView(cards.length)))
			setCurrentCard(cards[SliderInitialIdx(SliderPerView(cards.length))])
			setIndex(SliderInitialIdx(SliderPerView(cards.length)))
		}
	}, [cards])

	return {
		setIndex,
		sliderPerView,
		initialIndex,
		visibleNumberCard,
		setVisibleNumberCard,
		currentCard
	}
}
