import { FC } from 'react'

import Header0 from '@/screens/transaction-detail/header/header0/Header0'
import Header1 from '@/screens/transaction-detail/header/header1/Header1'
import Header2 from '@/screens/transaction-detail/header/header2/Header2'
import styles from '@/screens/transaction-detail/header/Header.module.scss'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetailHeader: FC<ITransactionDetail> = props => {
	return (
		<>
			<Header0 />
			<Header1 {...props}/>
			<div className={styles.colorDiv}></div>
			<Header2 />
		</>
	)
}

export default TransactionDetailHeader
