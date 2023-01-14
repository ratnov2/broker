import { ButtonHTMLAttributes } from 'react'

export interface IAuthButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	baseStyle: 'primary' | 'secondary'
}
