import { FC } from 'react'

import Layout from '@/layout/Layout'

import MiddleDashboard from '@/screens/dashboard/middle/MiddleDashboard'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<div className='flex h-screen w-full items-center justify-center'>
				<h1 className='text-center text-7xl font-bold text-red'>RED Project</h1>
			</div>
			<MiddleDashboard />
		</Layout>
	)
}

export default Dashboard
