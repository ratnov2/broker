import { FC } from 'react'

import Layout from '@/layout/Layout'

import StatExpense from './card-statistic/statExpense/StatExpense'
import StatIncome from './card-statistic/statIncome/StatIncome'
import Card from './card/Card'
import styles from './dashboard.module.scss'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<div className={styles.container}>
				<h1 className={styles.dashboard}>Dashboard</h1>
				<div className={styles.inner}>
					<Card />
					<StatIncome />
					<StatExpense />
				</div>
			</div>
		</Layout>
	)
}

export default Dashboard
