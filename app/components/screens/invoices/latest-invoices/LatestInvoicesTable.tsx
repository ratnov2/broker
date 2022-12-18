import { FC, useEffect, useState } from 'react';



import Pagination from '@/ui/pagination/Pagination';



import styles from './LatestInvoices.module.scss';
import LatestInvoicesItem from './LatestInvoicesItem';
import LatestInvoiceTableHeader from './LatestInvoicesTableHeader';
import { fakeLatestInvoices } from './latestInvoices.data';
import { ILatestInvoice } from './latestInvoices.interface';


const LatestInvoices: FC = () => {
	const [latestInvoices, setLatestInvoices] = useState<ILatestInvoice[]>([])
	const [isLoadingLatestInvoices, setIsLoadingLatestInvoices] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [invoicesPerPage] = useState(5)

	useEffect(() => {
		const fetchLatestInvoices = async () => {
			setIsLoadingLatestInvoices(true)
			const res = fakeLatestInvoices as ILatestInvoice[] //await axios.get('https://??????/latest-invoices/)
			setLatestInvoices(res)
			setIsLoadingLatestInvoices(false)
		}

		fetchLatestInvoices()
	}, [])

	//Get Current invoices on Page
	const indexOfLastInvoice = currentPage * invoicesPerPage
	const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage
	const currentInvoices = latestInvoices.slice(
		indexOfFirstInvoice,
		indexOfLastInvoice
	)

	if (isLoadingLatestInvoices) {
		return (
			<div className='h-[601px] flex items-center justify-center'>
				Loading invoices..
			</div>
		)
	}

	return (
		<div className={styles.latestInvoicesSection}>
			<h2>Latest Invoices</h2>
			<LatestInvoiceTableHeader />
			{currentInvoices.length ? (
				<>
					{currentInvoices.map(currentInvoice => (
						<LatestInvoicesItem
							key={currentInvoice.invoiceNum}
							latestInvoice={currentInvoice}
						/>
					))}
					<Pagination
						itemsPerPage={invoicesPerPage}
						totalItems={latestInvoices.length}
						currentPage={currentPage}
						onChangePage={setCurrentPage}
					/>
				</>
			) : (
				<div className='h-[601px] flex items-center justify-center'>
					Invoices not found
				</div>
			)}
		</div>
	)
}

export default LatestInvoices