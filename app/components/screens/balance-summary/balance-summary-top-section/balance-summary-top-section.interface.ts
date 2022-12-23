import { MutableRefObject } from 'react'
import type { ChartJSOrUndefined } from 'react-chartjs-2/dist/types'

export interface PropsBalanceSummaryTopSection {
  refChartLine:MutableRefObject<ChartJSOrUndefined<"line", number[], string>>
}