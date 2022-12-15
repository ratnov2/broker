import { FC } from 'react'

import Layout from '@/layout/Layout'

import AddNewInvoice from '@/../pages/add-new-invoice'

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<div>
				<AddNewInvoice />
			</div>
		</Layout>
	)
}

export default Dashboard
