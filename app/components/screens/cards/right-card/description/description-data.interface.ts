export interface PropsDescription {
	type: string
	number: string
	bank: string
	name: string
	valid: {
		month: number
		year: number
	}
	visibleNumberCard: boolean
}
