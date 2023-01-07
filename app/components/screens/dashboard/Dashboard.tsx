import Layout from '@/layout/Layout'
import {FC} from 'react'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<div className='flex h-screen w-full items-center justify-center'>
				<h1 className='text-center text-7xl font-bold text-red'>RED Project</h1>
			</div>
		</Layout>
	)
}

export default Dashboard
