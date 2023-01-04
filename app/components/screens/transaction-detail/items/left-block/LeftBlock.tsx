import React, { FC } from 'react'

import styles from '@/screens/transaction-detail/items/left-block/LeftBlock.module.scss'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetailLeftBlock: FC<ITransactionDetail> = props => {
	return (
		<div className={styles.leftBlock}>
			<div className='mb-3 font-bold text-black'>
				{props.paymentType}
			</div>
			<div className='mb-3 mt-5'>Due Date</div>
			<div className='mb-3 font-bold text-[#262666]'>
				{props.invTable.length
					? props.invTable[0].date
					: '----'}
			</div>
		</div>
	)
}

export default TransactionDetailLeftBlock
