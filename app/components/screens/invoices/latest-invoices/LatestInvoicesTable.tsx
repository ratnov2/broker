import { FC } from 'react'

import Pagination from '@/ui/pagination/Pagination'

import { ILatestInvoice } from './LatestInvoices.interface'
import styles from './LatestInvoices.module.scss'
import LatestInvoicesItem from './LatestInvoicesItem'
import LatestInvoiceTableHeader from './LatestInvoicesTableHeader'

interface ILatestInvoicesTable {
	latestInvoices: ILatestInvoice[]
	isLoading: boolean
}

const LatestInvoices: FC<ILatestInvoicesTable> = ({
	latestInvoices
}) => {
	return (
		<div className={styles.latestInvoicesSection}>
			<h2>Latest Invoices</h2>
			<LatestInvoiceTableHeader/>
			{latestInvoices.length ? (
				<>
					{latestInvoices.map(latestInvoice => (
						<LatestInvoicesItem
							key={latestInvoice.invoiceNum}
							latestInvoice={latestInvoice}
						/>
					))}
					<Pagination />
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
