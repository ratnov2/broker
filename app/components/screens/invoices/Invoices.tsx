import { FC, SetStateAction, useState } from 'react'

import Layout from '@/layout/Layout'

import { useInvoices } from '@/hooks/useInvoices'

import LatestInvoices from './latest-invoices/LatestInvoices'
import OverviewInvoices from './overview-invoices/OverviewInvoices'

const Invoices: FC = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const {
		isLoadingOverviewInvoices,
		overviewInvoices,
		isLoadingLatestInvoices,
		latestInvoices
	} = useInvoices(currentPage)

	return (
		<Layout title='Invoices'>
			<div className='h-screen w-full'>
				<h1 className='text-top text-3xl font-bold text-black mb-2'>
					Invoices
				</h1>
				<OverviewInvoices
					period={'month'}
					isLoading={isLoadingOverviewInvoices}
					overviewInvoices={overviewInvoices}
				/>
				<LatestInvoices
					latestInvoices={latestInvoices}
					isLoading={isLoadingLatestInvoices}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</Layout>
	)
}

export default Invoices
