import { ChangeEventHandler } from 'react'

type timeRangeDateType = {
	date: Date
	income: number
}

export type timeRangeType = {
	name: string
	thisData: timeRangeDateType
	lastData: timeRangeDateType
}

export type timeLapsType = 'week' | 'year'

export interface IChartOverview {
	title: string
	timeLaps?: timeLapsType
	changeData?: ChangeEventHandler<HTMLSelectElement>
	timeRangeData: timeRangeType[]
}

export interface IChartLegend extends Omit<IChartOverview, 'timeRangeData'> {}
