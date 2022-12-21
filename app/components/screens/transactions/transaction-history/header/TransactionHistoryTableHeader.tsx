import { FC } from 'react'

import styles from './TransactionHistoryHeader.module.scss'

const TransactionHistoryTableHeader: FC = ({}) => {
	return (
		<div className={styles.tableHeader}>
			<div className={styles.recipient}>Recipient</div>
			<div className={styles.invoiceNum}>Invoice</div>
			<div className={styles.date}>Date</div>
			<div className={styles.amount}>Amount</div>
			<div className={styles.location}>Location</div>
			<div className={styles.status}>Status</div>
			<div className={styles.actions}></div>
		</div>
	)
}

export default TransactionHistoryTableHeader
