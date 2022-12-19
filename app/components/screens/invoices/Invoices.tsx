import { FC } from 'react'

import Layout from '@/layout/Layout'

import LatestInvoicesTable from './latest-invoices/LatestInvoices'
import OverviewInvoices from './overview-invoices/OverviewInvoices'

const Invoices: FC = () => {
	return (
		<Layout title='Invoices'>
			<div className='h-screen w-full'>
				<h1 className='text-top text-3xl font-bold text-black mb-2'>
					Invoices
				</h1>
				<OverviewInvoices period={'month'} />
				<LatestInvoicesTable />
			</div>
		</Layout>
	)
}

export default Invoices
