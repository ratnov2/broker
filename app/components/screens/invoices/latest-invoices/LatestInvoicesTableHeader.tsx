import cn from 'clsx'
import { FC } from 'react'

import styles from './LatestInvoices.module.scss'

const LatestInvoiceTableHeader: FC = ({}) => {
	return (
		<div className={styles.tableHeader}>
			<input
				type='checkbox'
				className=''
				style={{height: '20px',width: '20px'}}
			/>
			<div className={styles.recipient}>Recipient</div>
			<div className={styles.invoiceNum}>Invoice</div>
			<div className={styles.status}>Status</div>
			<div className={styles.date}>Date</div>
			<div className={styles.service}>Service</div>
			<div className={styles.actions}>Action</div>
		</div>
	)
}

export default LatestInvoiceTableHeader
