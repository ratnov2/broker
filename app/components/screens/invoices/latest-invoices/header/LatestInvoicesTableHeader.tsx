import { FC } from 'react'

import styles from './LatestInvoicesHeader.module.scss'

interface IHeader {
	toggleCheckboxes: (id?: number) => void
}

const columnNames = [
	'Recipient',
	'Invoice',
	'Status',
	'Date',
	'Service',
	'Action'
]

const LatestInvoiceTableHeader: FC<IHeader> = ({ toggleCheckboxes }) => {
	return (
		<div className={styles.tableHeader}>
			<input
				type='checkbox'
				className=''
				style={{ height: '20px', width: '20px' }}
				onChange={() => {
					toggleCheckboxes()
				}}
			/>
			{columnNames.map(columnName => (
				<div key={columnName} className={styles[columnName]}>{columnName}</div>
			))}
		</div>
	)
}

export default LatestInvoiceTableHeader
