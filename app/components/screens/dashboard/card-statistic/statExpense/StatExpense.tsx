import { FC, useState } from 'react'

import { useExpenseAll } from '@/hooks/statistics/useExpenseAll'

import { UserData } from '../../Data'
import LineChart from '../../LineChart'

import styles from './statExpense.module.scss'

const Expense: FC = () => {
	const [userData, setUserData] = useState({
		labels: UserData.map(data => data.day),
		datasets: [
			{
				label: 'Dollars',
				data: UserData.map(data => data.expense),
				borderColor: '#54C5EB',
				borderWidth: 3
			}
		]
	})

	const { data: expenseData } = useExpenseAll()

	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.top}>
					<div className={styles.total}>
						<span>Expense</span>${expenseData?.total}
					</div>
					<div className={styles.changes}>
						-0,5%
						<span>last month</span>
					</div>
				</div>
				<div className={styles.bot}>
					<div className={styles.chart__container}>
						<LineChart statisticsAll={expenseData} chartData={userData} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Expense
