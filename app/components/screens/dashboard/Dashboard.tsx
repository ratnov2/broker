import { FC } from 'react'

import Layout from '@/layout/Layout'

import Card from './card/Card'
import styles from './dashboard.module.scss'
import Expense from './expense/expense'
import Income from './income/income'

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
