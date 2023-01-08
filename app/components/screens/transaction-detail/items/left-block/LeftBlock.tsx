import React, { FC } from 'react'

import styles from '@/screens/transaction-detail/items/left-block/LeftBlock.module.scss'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'
import { convertDateDetail } from '@/utils/convert-date'

const TransactionDetailLeftBlock: FC<ITransactionDetail> = props => {
	return (
		<div className={styles.leftBlock}>
			<div className={styles.paymentType}>
				{/* {props.paymentType} */}
				Paypal
			</div>
			<div className={styles.dueDate}>Due Date</div>
			<div className={styles.createdAt}>
				{convertDateDetail(props.createdAt)}
			</div>
		</div>
	)
}

export default TransactionDetailLeftBlock

