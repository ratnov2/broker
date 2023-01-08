import React, { FC } from 'react'

import styles from '@/screens/transaction-detail/items/item/Item.module.scss'
import { ITransactionDetailItems } from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetailitem: FC<ITransactionDetailItems> = props => {
	return (
		<>
			<div className={styles.item}>
				<span className={styles.item_descr}>{props.name}</span>
				<span className={styles.duration}>{props.duration}h</span>
				<span className={styles.rate}>{props.rate}</span>
				<span className={styles.amount}>${new Intl.NumberFormat().format(props.amount)}</span>
			</div>
		</>
	)
}

export default TransactionDetailitem
