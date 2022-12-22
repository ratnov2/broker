import { FC } from 'react'

import AddNewInvoice from '@/components/add-new-invoice/AddNewInvoice'

import Layout from '@/layout/Layout'

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
