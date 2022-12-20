import { useState } from 'react'

import { UserData } from '../../Data'
import LineChart from '../../LineChart'

import styles from './statIncome.module.scss'

function income() {
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

	return (
		<div className={styles.income__container}>
			<div className={styles.income__inner}>
				<div className={styles.income__top}>
					<div className={styles.income__total}>
						<span>Income</span>
						$45,741
					</div>
					<div className={styles.income__changes}>
						+0,5%
						<span>last month</span>
					</div>
				</div>
				<div className={styles.income__bot}>
					<div className={styles.chart__container}>
						<LineChart chartData={userData} />
					</div>
				</div>
			</div>
		</div>
	)
}
export default income
