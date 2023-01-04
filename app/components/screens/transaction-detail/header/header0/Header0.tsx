import { FC } from 'react'

import styles from '@/screens/transaction-detail/header/header0/Header0.module.scss'

const columnNames = ['Client', 'Contact', 'Recipient', 'Location']

const TransactionDetailHeader0: FC = () => {
	return (
		<>
			<div className={styles.tableHeader}>
				{columnNames.map(columnName => (
					<div className={styles[columnName]}>{columnName}</div>
				))}
			</div>
		</>
	)
}

export default TransactionDetailHeader0
