import React, { FC } from 'react'

import styles from '@/screens/transaction-detail/items/Items.module.scss'
import Item from '@/screens/transaction-detail/items/item/Item'
import LeftBlock from '@/screens/transaction-detail/items/left-block/LeftBlock'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetailitems: FC<ITransactionDetail> = props => {
	return (
		<div className={styles.tableHeader}>
			<div className={styles.leftBlock}>
				<LeftBlock {...props} />
			</div>
			<div className={styles.tableSize}>
				{props.items.map(item => (
					<Item {...item} key={item.id} />
				))}
			</div>
		</div>
	)
}

export default TransactionDetailitems
