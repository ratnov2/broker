import { FC, useState } from 'react'

import { convertDate } from '@/utils/convert-date'

import styles from './LatestInvoicesItem.module.scss'
import Actions from './actions/Actions'
import { ILatestInvoice } from './latest-invoices.interface'
import Recipient from './recipient/Recipient'
import Status from './status/Status'

interface IInvoiceItem {
	latestInvoice: ILatestInvoice
	selectedInvoiceId: number | undefined
}

const InvoiceItem: FC<IInvoiceItem> = ({
	latestInvoice: {
		_id,
		recipientAvatar,
		name,
		invoiceNum,
		service,
		date,
		status,
		email
	},
	selectedInvoiceId
}) => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div
			id={_id.toString()}
			className={styles.latestInvoiceRow}
			style={
				selectedInvoiceId?.toString() === _id.toString()
					? { borderLeft: '4px solid blue' }
					: { borderLeft: '4px solid white' }
			}
		>
			<input
				key={invoiceNum}
				type='checkbox'
				className='invoiceNum'
				style={{ height: '20px', width: '20px' }}
				checked={
					isChecked ||
					selectedInvoiceId?.toString() === _id.toString()
				} //Не работает :((((
				onClick={() => {
					setIsChecked(!isChecked)
				}}
			/>
			<Recipient avatar={recipientAvatar} name={name} email={email} />

			<span className={styles.invoiceNum}>{invoiceNum}</span>

			<Status status={status} />

			<div className={styles.date}>
				<p>{convertDate(date)[0]}</p>
				<span>{convertDate(date)[1]}</span>
			</div>

			<span className={styles.service}>{service}</span>

			<Actions />
		</div>
	)
}

export default InvoiceItem
