import { FC } from 'react'

import { useExpenseAll } from '@/hooks/statistics/useExpenseAll'

import styles from './StatExpense.module.scss'
import LineChart from '@/screens/dashboard/top/LineChart'

const Expense: FC = () => {
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
						<span>last week</span>
					</div>
				</div>
			</div>
			<LineChart statisticsAll={expenseData} color='light-blue' />
		</div>
	)
}

export default Expense
