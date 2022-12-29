import { Dispatch, SetStateAction } from 'react'
import { TypeUserCardForSlider } from '../slider/slider.interface'

export interface PropsCard {
	userCard:TypeUserCardForSlider
	widthCard: number
	styleFigure?: boolean
	className?: string
	visibleNumberCard: boolean
	setVisibleNumberCard: Dispatch<SetStateAction<boolean>>
}
