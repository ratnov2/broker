import { FC, useState } from 'react'

import { ITransaction } from '@/shared/types/transaction.types'

import { convertDate } from '@/utils/convert-date'

import Status from '../rows/status/Status'

import styles from './TransactionHistoryItem.module.scss'
import Actions from './actions/Actions'
import Recipient from '@/screens/invoices/latest-invoices/rows/recipient/Recipient'

interface IInvoiceItem {
	transaction: ITransaction
}

const TransactionHistoryItem: FC<IInvoiceItem> = ({
	transaction
}) => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div
			id={transaction.id.toString()}
			className={styles.transactionHistoryRow}
			style={
				isChecked
					? { borderLeft: '4px solid blue' }
					: { borderLeft: '4px solid white' }
			}
		>
			<input
				key={transaction.id}
				type='checkbox'
				className='invoiceNum'
				style={{ height: '20px', width: '20px' }}
				checked={isChecked}
				onChange={() => {
					setIsChecked(!isChecked)
				}}
			/>
			{transaction.invoice.recipient ? (
				<Recipient
					avatar={transaction.invoice.recipient.avatarPath}
					name={transaction.invoice.recipient.name}
					email={transaction.invoice.recipient.email}
				/>
			) : (
				<Recipient avatar={''} name={''} email={''} />
			)}

			<span className={styles.invoiceNum}>#{transaction.id}</span>

			<div className={styles.date}>
				<span>{convertDate(transaction.updatedAt)[0]}</span>
			</div>
			<span className={styles.amount}>{transaction.amount}</span>
			<span className={styles.location}>{transaction.invoice.recipient.address}</span>
			<Status status={transaction.status} />
			<Actions />
		</div>
	)
}

export default TransactionHistoryItem
