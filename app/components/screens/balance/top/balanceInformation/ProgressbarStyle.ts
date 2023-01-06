import { CSSProperties } from 'react'

export const containerStyles = {
	height: 16,
	width: '100%',
	backgroundColor: '#e0e0de',
	borderRadius: 50
}

export const fillerStyles = (
	percents: number,
	bgColor: string
): CSSProperties => ({
	height: '100%',
	width: `${percents}%`,
	backgroundColor: bgColor,
	borderRadius: 'inherit',
	textAlign: 'right'
})
