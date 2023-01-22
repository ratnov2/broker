export interface ByDay {
	day: string
	amount: number
}

export interface IStatisticsAll {
	total: number
	byDay: ByDay[]
}
