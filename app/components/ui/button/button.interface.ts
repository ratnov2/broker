import { ButtonHTMLAttributes } from 'react'

import { tailwindColorsType } from '@/utils/tailwindColors'

export type IButtonSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	btnType: 'primary' | 'secondary' | 'tertiary'
	btnSize?: IButtonSize
	btnColor?: tailwindColorsType
}
