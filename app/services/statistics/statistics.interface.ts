export interface IIncomeByDynamic {
	date: string
	amount: number
	previous_amount: number
}

export enum IIncomeByDynamicQueryParam {
	'week' = 'day',
	'year' = 'month'
}

export interface IExpenseCategories {
	[key: string]: number
}