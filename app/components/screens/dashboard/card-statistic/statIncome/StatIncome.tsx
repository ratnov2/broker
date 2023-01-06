import { FC, useState } from 'react'

import { useIncomeAll } from '@/hooks/statistics/useIncomeAll'

import { UserData } from '../../Data'
import LineChart from '../../LineChart'

import styles from './statIncome.module.scss'

const Income: FC = () => {
	const [userData, setUserData] = useState({
		labels: UserData.map(data => data.day),
		datasets: [
			{
				label: 'Dollars',
				data: UserData.map(data => data.income),
				borderColor: '#6160DC',
				borderWidth: 3
			}
		]
	})

	const { data: incomeData } = useIncomeAll()
	// const incomeData = {
	// 	total: 1500,
	// 	byDay: [
	// 		{
	// 			day: 'Friday   ',
	// 			amount: 1500
	// 		},
	// 		{
	// 			day: 'Saturday   ',
	// 			amount: 3500
	// 		}
	// 	]
	// }

	return (
		<div className={styles.income__container}>
			<div className={styles.income__inner}>
				<div className={styles.income__top}>
					<div className={styles.income__total}>
						<span>Income</span>${incomeData?.total}
					</div>
					<div className={styles.income__changes}>
						+0,5%
						<span>last month</span>
					</div>
				</div>
				<div className={styles.income__bot}>
					<div className={styles.chart__container}>
						<LineChart statisticsAll={incomeData} chartData={userData} />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Income
