import { tailwindColorsType } from '@/utils/tailwindColors'

export interface categoriesDataType {
	_id: number
	name: string
	data: number
	transactions: number
	color: tailwindColorsType
}
