import { ITailwindColorsFiltered } from '@/utils/tailwindColors'

export interface categoriesDataType {
	_id: string
	name: string
	data: number
	transactions: number
	color: ITailwindColorsFiltered
}
