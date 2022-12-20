import { FC, useState } from 'react'

import Pagination from '@/ui/pagination/Pagination'
import Loader from '@/ui/pagination/loader/Loader'

import styles from './LatestInvoices.module.scss'
import LatestInvoicesItem from './LatestInvoicesItem'
import LatestInvoiceTableHeader from './LatestInvoicesTableHeader'
import { ILatestInvoices } from './rows/latest-invoices.interface'

const LatestInvoices: FC<ILatestInvoices> = ({
	latestInvoices,
	isLoading,
	currentPage,
	setCurrentPage
}) => {
	const [invoicesPerPage] = useState(5)

	//Get Current invoices on Page
	const indexOfLastInvoice = currentPage * invoicesPerPage
	const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage
	const currentInvoices = latestInvoices?.slice(
		indexOfFirstInvoice,
		indexOfLastInvoice
	)

	return (
		<div className={styles.latestInvoicesSection}>
			<h2>Latest Invoices</h2>
			<LatestInvoiceTableHeader />
			{isLoading ? (
				<Loader />
			) : currentInvoices?.length ? (
				<>
					{currentInvoices.map(latestInvoice => (
						<LatestInvoicesItem
							key={latestInvoice._id}
							latestInvoice={latestInvoice}
						/>
					))}
					{latestInvoices && (
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							maxItems={latestInvoices.length}
							itemsPerPage={invoicesPerPage}
						/>
					)}
				</>
			) : (
				<div className='h-[501px] flex items-center justify-center'>
					Invoices not found
				</div>
			)}
		</div>
	)
}

export default LatestInvoices
