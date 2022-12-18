import { Dispatch, SetStateAction } from 'react'

export interface PropsSlider {
	data: {
		balance?: string
		holder?: string
		valid?: {
			month: number
			year: number
		}
		number?: string
		bg?: string
		styleFigure?: boolean
		className?: string
	}[]
	currentCard: {
		balance?: string
		holder?: string
		valid?: {
			month: number
			year: number
		}
		NCard?: string
		bg?: string
		styleFigure?: boolean
		className?: string
	}
	idx: number
	setIdx: any
	sliderPerView: number
	initialIdx: number
	visibleNumberCard: boolean
	setVisibleNumberCard: Dispatch<SetStateAction<boolean>>
}
export interface PropsUseSlider {
	setIdx: Dispatch<SetStateAction<number>>
}
