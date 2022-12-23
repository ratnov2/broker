import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip
} from 'chart.js'
import React, { useEffect, useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import type { ChartData, ChartOptions } from 'chart.js';
import { tailwindColors } from '@/utils/tailwind-colors.type'

import { balanceSummaryWeekData } from '../balance-summary.data'

const BalanceStatisticsSummary = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	)


const ref = useRef()
const defaultLegendClickHandler = ChartJS.defaults.plugins.legend.onClick;
//const pieDoughnutLegendClickHandler = ChartJS.controllers.doughnut.overrides.plugins.legend.onClick;

const newLegendClickHandler = function (e:any, legendItem:any, legend:any) {
	// const index = legendItem.datasetIndex;
	// const type = legend.chart.config.type;

	// if (index > 1) {
	// 		// Do the original logic
	// 		if (type === 'pie' || type === 'doughnut') {
	// 				//pieDoughnutLegendClickHandler(e, legendItem, legend)
	// 		} else {
	// 				defaultLegendClickHandler(e, legendItem, legend);
	// 		}

	// } else {
	// 		let ci = legend.chart;
	// 		[
	// 				ci.getDatasetMeta(0),
	// 				ci.getDatasetMeta(1)
	// 		].forEach(function(meta) {
	// 				meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
	// 		});
	// 		ci.update();
	// }
};
	

	const options:ChartOptions<'bar'> = {
		responsive: true,
		
		plugins: {
			legend: {
				position: 'top',
				align:'end',
				labels: {
					usePointStyle: true
				},
				
			//	onClick:newLegendClickHandler
			},
		},
	
		scales: {
			y: {
				max: 100,
				min: 0
			}
		}
	}

	const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

	const data:ChartData<'bar'> = {
		labels,
		datasets: [
			{
				label: 'Dataset 1',
				data: balanceSummaryWeekData.expiresToWeek,
				backgroundColor: tailwindColors['light-blue']
			},
			{
				label: 'Dataset 2',
				data: balanceSummaryWeekData.incomeToWeek,
				backgroundColor: tailwindColors.purple
			}
		]
	}

	useEffect(()=>{
		if(ref.current){
			console.log(ref.current.legend);
			ref.current.legend.active=true
			
		}
	},[ref])
	return (
		<div className='w-1/2 bg-white rounded-xl p-5 pb-10'>
			<h1>Balance Statistics</h1>
			{/* @ts-ignore */}
			<Bar ref={ref} options={options} data={data} />
		</div>
	)
}

export default BalanceStatisticsSummary
