import { tailwindColorsType } from "@/utils/tailwind-colors.type"


export interface categoriesDataType {
	_id: number
	name: string
	data: number
	transactions: number
	color: tailwindColorsType
}
