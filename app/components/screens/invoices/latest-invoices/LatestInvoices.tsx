import { FC, useState } from 'react'

import Pagination from '@/ui/pagination/Pagination'
import Loader from '@/ui/pagination/loader/Loader'

import styles from './LatestInvoices.module.scss'
import LatestInvoiceTableHeader from './header/LatestInvoicesTableHeader'
import LatestInvoicesItem from './rows/LatestInvoicesItem'
import { ILatestInvoices } from './rows/latest-invoices.interface'

const LatestInvoices: FC<ILatestInvoices> = ({
	latestInvoices,
	isLoading,
	currentPage,
	setCurrentPage,
	maxItems = 0
}) => {
	const [invoicesPerPage] = useState(5)

	const [selectedInvoicesId, setSelectedInvoicesId] = useState<number[]>([])
	const [isCheckedHeader, setIsCheckedHeader] = useState(false)

	const toggleCheckboxes = (id?: number) => {
		if (id) {
			if (selectedInvoicesId.find(a => a === id)) {
				setSelectedInvoicesId(
					selectedInvoicesId.filter(function (item) {
						return item !== id
					})
				)
			} else {
				setSelectedInvoicesId([...selectedInvoicesId, id])
			}
		} else {
			if (isCheckedHeader) {
				setSelectedInvoicesId([])
			} else {
				latestInvoices &&
					setSelectedInvoicesId(latestInvoices.map(item => item.id))
			}
			setIsCheckedHeader(!isCheckedHeader)
		}
	}

	return (
		<div className={styles.latestInvoicesSection}>
			<h2>Latest Invoices</h2>
			<LatestInvoiceTableHeader toggleCheckboxes={toggleCheckboxes} />
			{isLoading ? (
				<Loader />
			) : latestInvoices?.length ? (
				<>
					{latestInvoices.map(latestInvoice => (
						<LatestInvoicesItem
							key={latestInvoice.id}
							latestInvoice={latestInvoice}
							selectedInvoiceId={selectedInvoicesId.find(i => {
								return i === latestInvoice.id
							})}
							toggleCheckboxes={toggleCheckboxes}
						/>
					))}
					{latestInvoices && (
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							maxItems={maxItems}
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
