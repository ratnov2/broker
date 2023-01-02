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
	transaction: { id, user, updatedAt, amount, status }
}) => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div
			id={id.toString()}
			className={styles.transactionHistoryRow}
			style={
				isChecked
					? { borderLeft: '4px solid blue' }
					: { borderLeft: '4px solid white' }
			}
		>
			<input
				key={id}
				type='checkbox'
				className='invoiceNum'
				style={{ height: '20px', width: '20px' }}
				checked={isChecked}
				onClick={() => {
					setIsChecked(!isChecked)
				}}
			/>
			{user ? (
				<Recipient
					avatar={user.avatarPath}
					name={user.name}
					email={user.email}
				/>
			) : (
				<Recipient avatar={''} name={''} email={''} />
			)}

			<span className={styles.invoiceNum}>#{id}</span>

			<div className={styles.date}>
				<span>{convertDate(updatedAt)[0]}</span>
			</div>
			<span className={styles.amount}>{amount}</span>
			<span className={styles.location}>{'Undefined'}</span>
			<Status status={status} />
			<Actions />
		</div>
	)
}

export default TransactionHistoryItem
