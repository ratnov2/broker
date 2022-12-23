import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { useEffect, useRef } from 'react'
import { Doughnut } from 'react-chartjs-2'

const OutcomeCategoriesSummary = () => {
  const ref = useRef()
	ChartJS.register(ArcElement, Tooltip, Legend)
  const options = {
    plugins:{
		
      legend:{
        labels: {
					usePointStyle: true
				},
        position:'right',
        
        
      }
    }
  }
	const data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132)',
					'rgba(54, 162, 235)',
					'rgba(255, 206, 86)',
					'rgba(75, 192, 192)',
					'rgba(153, 102, 255)',
					'rgba(255, 159, 64)',
          
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}
		]
	}
  useEffect(()=>{
    //console.log(ref);
    if(ref.current){
      //ref.current.legend
    }
  },[ref])

	return (
		<div className='w-1/2 bg-white ml-4 p-4 rounded-xl'>
      <h1>Outcome Categories</h1>
      {/* @ts-ignore */}
			<Doughnut ref={ref} data={data} options={options}/>
		</div>
	)
}

export default OutcomeCategoriesSummary
