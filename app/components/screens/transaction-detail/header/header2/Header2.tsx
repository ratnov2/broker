import { FC } from 'react'

import styles from '@/screens/transaction-detail/header/header2/Header2.module.scss'
import { ICol } from '@/screens/transaction-detail/transaction-detail.interface'

const column: ICol[] = [
	{
		name: 'Item_Description',
		desc: 'Item Description'
	},
	{
		name: 'Duration',
		desc: 'Duration'
	},
	{
		name: 'Rate',
		desc: 'Rate'
	},
	{
		name: 'Amount',
		desc: 'Amount'
	}
]

const TransactionDetailHeader2: FC = () => {
	return (
		<>
			<div className={styles.tableHeader}>
				<div className={styles.leftBlock}>
					<div className={styles['Payment_type']}>Payment type</div>
				</div>
				<div className={styles.tableSize}>
					{column.map(column => (
						<div className={styles[column.name]}>{column.desc}</div>
					))}
				</div>
			</div>
		</>
	)
}

export default TransactionDetailHeader2
