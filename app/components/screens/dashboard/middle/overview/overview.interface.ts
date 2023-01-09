import { ISelectOnChange } from '@/ui/select/select.interface'

export type chartBarDataType = {
	labels: string[]
	leftBar: number[]
	rightBar: number[]
}

export type timeLapsType = 'week' | 'year'
export interface IChartOverview {
	title: string
	timeLaps?: timeLapsType
	changeData?: ISelectOnChange
	chartBarData: chartBarDataType
}

export interface IChartLegend extends Omit<IChartOverview, 'chartBarData'> {}
