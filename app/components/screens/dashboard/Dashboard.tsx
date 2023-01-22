import { FC } from 'react'

import Layout from '@/layout/Layout'

import MiddleDashboard from '@/screens/dashboard/middle/MiddleDashboard'
import TopDashboard from '@/screens/dashboard/top/TopDashboard'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<div className='grid gap-10'>
				<TopDashboard />
				<MiddleDashboard />
			</div>
		</Layout>
	)
}

export default Dashboard
