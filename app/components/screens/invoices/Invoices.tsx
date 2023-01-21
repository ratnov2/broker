import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import { useInvoices } from '@/hooks/useInvoices'

import LatestInvoices from './latest-invoices/LatestInvoices'
import OverviewInvoices from './overview-invoices/OverviewInvoices'

const Invoices: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const { isLoadingOverviewInvoices, overviewInvoices } =
		useInvoices(currentPage)

	const { latestInvoices, isLoadingLatestInvoices } = useInvoices(currentPage)

	return (
		<Layout title='Invoices'>
			<div className='h-full w-full mt-12'>
				<h1 className='text-top text-4xl font-bold text-black mb-10'>
					Invoices
				</h1>
				<OverviewInvoices
					isLoading={isLoadingOverviewInvoices}
					overviewInvoices={overviewInvoices}
				/>
				<LatestInvoices
					latestInvoices={latestInvoices?.invoices}
					isLoading={isLoadingLatestInvoices}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					maxItems={latestInvoices?.length}
				/>
			</div>
		</Layout>
	)
}

export default Invoices
