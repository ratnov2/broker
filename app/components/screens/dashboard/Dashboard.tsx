import { FC } from 'react'

import Layout from '@/layout/Layout'

import Expense from './card-statistic/expense/StatExpense'
import Income from './card-statistic/income/StatIncome'
import Card from './card/Card'
import styles from './dashboard.module.scss'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<div className={styles.container}>
				<h1 className={styles.dashboard}>Dashboard</h1>
				<div className={styles.inner}>
					<Card />
					<Income />
					<Expense />
				</div>
			</div>
		</Layout>
	)
}

export default Dashboard
