import { FC } from 'react'

import { convertDate } from '@/utils/convert-date'

import styles from './LatestInvoicesItem.module.scss'
import Actions from './actions/Actions'
import { ILatestInvoice } from './latest-invoices.interface'
import Recipient from './recipient/Recipient'
import Status from './status/Status'

interface IInvoiceItem {
	latestInvoice: ILatestInvoice
	selectedInvoiceId: number | undefined
	toggleCheckboxes: (id?: number) => void
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
	selectedInvoiceId,
	toggleCheckboxes
}) => {
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
				checked={selectedInvoiceId?.toString() === _id.toString()}
				onChange={() => {
					toggleCheckboxes(_id)
				}}
			/>
			<Recipient avatar={recipientAvatar} name={name} email={email} />

			<span className={styles.invoiceNum}>{invoiceNum}</span>

			<Status status={status} />

			<div className={styles.date}>
				<span>{convertDate(date)[0]}</span>
			</div>

			<span className={styles.service}>{service}</span>

			<Actions />
		</div>
	)
}

export default InvoiceItem
