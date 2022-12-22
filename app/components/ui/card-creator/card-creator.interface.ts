import { Dispatch, SetStateAction } from 'react'

export interface PropsCardCreator {
	balance: number
	holder?: string
	valid?: {
		month: number
		year: number
	}
	number: string
	bg?: number | string
	widthCard: number
	styleFigure?: boolean
	className?: string
	visibleNumberCard: boolean
	setVisibleNumberCard: Dispatch<SetStateAction<boolean>>
}
