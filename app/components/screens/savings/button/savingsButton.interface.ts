import { MouseEvent } from 'react'

export interface IButtonItem {
	name: string
	color: string
	text: string
	height: string
	width: string
	onButtonClick?: (event: MouseEvent<HTMLButtonElement>) => void | null
}
