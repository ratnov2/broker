import { FC } from 'react'

import { useIncomeAll } from '@/hooks/statistics/useIncomeAll'

import styles from './StatIncome.module.scss'
import LineChart from '@/screens/dashboard/top/LineChart'

const Income: FC = () => {
	const { data: incomeData } = useIncomeAll()

	return (
		<div className={styles.income__container}>
			<div className={styles.income__inner}>
				<div className={styles.income__top}>
					<div className={styles.income__total}>
						<span>Income</span>${incomeData?.total}
					</div>
					<div className={styles.income__changes}>
						+0,5%
						<span>last week</span>
					</div>
				</div>
			</div>
			<LineChart statisticsAll={incomeData} />
		</div>
	)
}
export default Income
