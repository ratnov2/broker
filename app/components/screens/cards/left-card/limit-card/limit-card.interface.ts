import { AxiosResponse } from "axios"
import { UseMutationResult } from "react-query"

export interface PropsLimitCard {
	limit: {
		now: number
		all: number
	}
}
