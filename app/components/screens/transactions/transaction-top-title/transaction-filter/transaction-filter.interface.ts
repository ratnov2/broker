import { Dispatch, SetStateAction } from "react"

export interface IFilter {
	options: {
		value: string
		label: string
	}[]
	setOrderBy: Dispatch<SetStateAction<string>>
	orderBy: string
}
