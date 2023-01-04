import React, { FC } from 'react'

import styles from '@/screens/transaction-detail/items/item/Item.module.scss'
import { ITransactionTableDetail } from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetailitem: FC<ITransactionTableDetail> = props => {
	return (
		<>
			<div className={styles.item}>
				<span className={styles.item_descr}>{props.description}</span>
				<span className={styles.duration}>{props.duration}h</span>
				<span className={styles.rate}>{props.rate}</span>
				<span className={styles.amount}>${props.amount}</span>
			</div>
		</>
	)
}

export default TransactionDetailitem
