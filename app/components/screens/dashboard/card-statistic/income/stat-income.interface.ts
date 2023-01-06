export interface ByDay {
	day: string
	amount: number
}

export interface IIncomeAll {
	total: number
	byDay: ByDay[]
}
