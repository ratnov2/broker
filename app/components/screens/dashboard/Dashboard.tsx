import { FC } from 'react'

import Layout from '@/layout/Layout'

import AddNewInvoice from '@/screens/add-new-invoice/AddNewInvoice'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<div>
				<h1 className='tex-5xl'>Red Project</h1>
			</div>
		</Layout>
	)
}

export default Dashboard
