import { ITailwindColorsFiltered } from '@/utils/tailwind-colors'

export interface categoriesDataType {
	_id: string
	name: string
	data: number
	transactions: number
	color: ITailwindColorsFiltered
}
