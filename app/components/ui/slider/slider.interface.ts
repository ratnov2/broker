
import { IUserCard } from '@/shared/types/bank-accounts.interface'
import { Dispatch, SetStateAction } from 'react'

export interface PropsSlider {
	userCards: TypeUserCardAndStyle[]
	setIndex: Dispatch<SetStateAction<number>>
	sliderPerView: number
	initialIndex: number
	visibleNumberCard: boolean
	setVisibleNumberCard: Dispatch<SetStateAction<boolean>>
}
export interface PropsUseSlider {
	setIndex: Dispatch<SetStateAction<number>>
}

export type TypeStyleCard = {
	background: string
}
export type TypeUserCardAndStyle = IUserCard & TypeStyleCard
