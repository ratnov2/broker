import { Dispatch, SetStateAction } from 'react'

export interface PropsSlider {
	data: {
		balance: number
		holder?: string
		valid?: {
			month: number
			year: number
		}
		number: string
		background?: string
		styleFigure?: boolean
		className?: string
	}[]
	setIndex: Dispatch<SetStateAction<number>>
	sliderPerView: number
	initialIdx: number
	visibleNumberCard: boolean
	setVisibleNumberCard: Dispatch<SetStateAction<boolean>>
}
export interface PropsUseSlider {
	setIndex: Dispatch<SetStateAction<number>>
}
