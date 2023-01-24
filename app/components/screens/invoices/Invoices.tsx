import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import { useInvoices } from '@/hooks/useInvoices'

import InvoicesTopTitle from './invoices-top-title/invoices-top-title'
import LatestInvoices from './latest-invoices/LatestInvoices'
import OverviewInvoices from './overview-invoices/OverviewInvoices'

const Invoices: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const { isLoadingOverviewInvoices, overviewInvoices } =
		useInvoices(currentPage)

	const { latestInvoices, isLoadingLatestInvoices } = useInvoices(currentPage)

	return (
		<Layout title='Invoices'>
			<div className='w-full mt-12'>
				<InvoicesTopTitle />

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
