import { FC } from 'react'

import Layout from '@/layout/Layout'

import LatestInvoicesTable from './latest-invoices/LatestInvoicesTable'
import OverView from './overview2/OverView'
import { overViewFakeData } from './overview2/overviewInvoices.data'
import { IOverViewElement } from './overview2/overview.interface'

const Balance: FC = () => {
	return (
		<Layout title='Invoices'>
			<div className='h-screen w-full'>
				<h1 className='text-top text-4xl font-bold text-black'>
					Invoices
				</h1>
				<OverView
					overViewElements={overViewFakeData as IOverViewElement[]}
					isLoading={false}
					period={'month'}
				/>
				<LatestInvoicesTable />
			</div>
		</Layout>
	)
}

export default Balance
