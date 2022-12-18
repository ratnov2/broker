import { FC } from 'react'

import Layout from '@/layout/Layout'

import LatestInvoicesTable from './latest-invoices/LatestInvoicesTable'
import OverView from './overview/OverView'
import { IOverViewElement } from './overview/overview.interface'

const Balance: FC = () => {
	return (
		<Layout title='Invoices'>
			<div className='h-screen w-full'>
				<h1 className='text-top text-4xl font-bold text-black'>
					Invoices
				</h1>
				<OverView period={'month'} />
				<LatestInvoicesTable />
			</div>
		</Layout>
	)
}

export default Balance
