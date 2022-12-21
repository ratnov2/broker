import Image from 'next/image'
import { FC, useState } from 'react'

import { convertDate } from '@/utils/convert-date'

import Actions from '../actions/Actions'
import Status from '../rows/status/Status'

import styles from './TransactionHistoryItem.module.scss'
import { ITransaction } from './transaction-history.interface'

interface IInvoiceItem {
	transaction: ITransaction
}

const TransactionHistoryItem: FC<IInvoiceItem> = ({
	transaction: {
		_id,
		recipient,
		invoiceNum,
		date,
		amount,
		location,
		status,
	}
}) => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div
			id={_id.toString()}
			className={styles.transactionHistoryRow}
			style={
				isChecked
					? { borderLeft: '4px solid blue' }
					: { borderLeft: '4px solid white' }
			}
		>
			<input
				key={invoiceNum}
				type='checkbox'
				className='invoiceNum'
				style={{ height: '20px', width: '20px' }}
				checked={isChecked}
				onClick={() => {
					setIsChecked(!isChecked)
				}}
			/>
			<div className={styles.recipient}>
				{recipient.recipientAvatar ? (
					<Image
						alt={recipient.name}
						src={recipient.recipientAvatar}
						width={48}
						height={48}
						draggable={false}
						style={{ borderRadius: '50px' }}
					/>
				) : (
					<div className='w-12 h-12 bg-gray rounded-[50%]'></div>
				)}
				<div className='flex-col'>
					<p>{recipient.name}</p>
					<span>{recipient.email}</span>
				</div>
			</div>

			<span className={styles.invoiceNum}>{invoiceNum}</span>

			<div className={styles.date}>
				<span>{convertDate(date)[0]}</span>
			</div>
			<span className={styles.amount}>{amount}</span>
			<span className={styles.location}>{location}</span>
			<Status status={status} />
			<Actions />
		</div>
	)
}

export default TransactionHistoryItem
