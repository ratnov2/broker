import { FC } from 'react';



import styles from './TransactionHistoryHeader.module.scss';


const columnNames = [
	'Recipient',
	'Invoice',
	'Date',
	'Amount',
	'Location',
	'Status',
	''
]
const TransactionHistoryTableHeader: FC = ({}) => {
	return (
		<div className={styles.tableHeader}>
			{columnNames.map(columnName => (
				<div className={styles[columnName === ''? 'Actions': columnName]}>{columnName}</div>
			))}
		</div>
	)
}

export default TransactionHistoryTableHeader