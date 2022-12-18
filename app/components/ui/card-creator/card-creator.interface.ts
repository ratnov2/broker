import { CSSProperties, Dispatch, SetStateAction } from 'react'

export interface TypesCardCreator {
	balance?: string
	holder?: string
	valid?: {
		month: number
		year: number
	}
	number?: string
	bg?: number | string
	widthBlock: number
	styleFigure?: boolean
	className?: string
	visibleNumberCard: boolean
	setVisibleNumberCard: Dispatch<SetStateAction<boolean>>
}
