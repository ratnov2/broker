import { ReactNode } from 'react'

export interface PropsModal {
	show: boolean
	onClose: () => void
	title?: string
	children: ReactNode
}
