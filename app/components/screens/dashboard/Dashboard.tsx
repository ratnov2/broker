import { FC } from 'react'

import Layout from '@/layout/Layout'

import styles from './Dashboard.module.scss'
import StatExpense from './card-statistic/stat-expense/StatExpense'
import StatIncome from './card-statistic/stat-income/StatIncome'
import Card from './card/Card'
import MiddleDashboard from '@/screens/dashboard/middle/MiddleDashboard'

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
				<MiddleDashboard />
			</div>
		</Layout>
	)
}

export default Dashboard
