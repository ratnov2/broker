import { FC } from 'react'

import StatExpense from '@/screens/dashboard/top/card-statistic/stat-expense/StatExpense'
import StatIncome from '@/screens/dashboard/top/card-statistic/stat-income/StatIncome'
import Card from '@/screens/dashboard/top/card/Card'

const TopDashboard: FC = () => {
	return (
		<div>
			<div className='flex gap-x-10'>
				<Card />
				<StatIncome />
				<StatExpense />
			</div>
		</div>
	)
}

export default TopDashboard
