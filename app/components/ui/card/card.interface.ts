import { Dispatch, SetStateAction } from 'react'

import { IUserCard } from '@/shared/types/bank-accounts.interface'

import { ISliderInit } from '@/screens/cards/cards-hooks/slider.interface'

export interface PropsCard {
	userCard: IUserCard
	widthCard: number
	styleFigure?: boolean
	className?: string
	slider: ISliderInit
	setSlider: Dispatch<SetStateAction<ISliderInit>>
}
