import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from '../LatestInvoices/LatestInvoicesTable.module.scss'
import { IOverViewItem } from '../Overview/overview.interface'

import LatestInvoiceTableHeader from './LatestInvoicesTableHeader'
import LatestInvoiceTableItem from './LatestInvoicesTableItem'
import { ITableItem } from './invoice-table.interface'

interface ILatestInvoicesTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	printHandler: () => void
}

const LatestInvoiceTable: FC<ILatestInvoicesTable> = ({
	tableItems,
	isLoading,
	headerItems,
	printHandler
}) => {
	return (
		<div style={LatestInvoicesContainer}>
			<div>
				<h1 className='text-top text-xl font-bold text-black'>
					Latest Invoices
				</h1>
			</div>
			<LatestInvoiceTableHeader headerItems={headerItems} />
			{isLoading ? (
				<div>loading</div>
			) : tableItems.length ? (
				tableItems.map(tableItem => (
					<LatestInvoiceTableItem
						key={tableItem._Id}
						printHandler={printHandler}
						tableItem={tableItem}
					/>
				))
			) : (
						<div style={{ textAlign: 'center', padding: '20px', color: 'black', fontSize: '24px'}}>Invoices not found</div>
			)}
		</div>
	)
}

export default LatestInvoiceTable

const LatestInvoicesContainer = {
	marginTop: '40px',
	padding: '20px',
	backgroundColor: 'white',
	borderRadius: '40px',
	width: '100%'
}
