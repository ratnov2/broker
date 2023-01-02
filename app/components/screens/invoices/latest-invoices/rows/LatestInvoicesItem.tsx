import { FC } from 'react'

import { ILatestInvoice } from '@/shared/types/invoice.types'

import { convertDate } from '@/utils/convert-date'

import styles from './LatestInvoicesItem.module.scss'
import Actions from './actions/Actions'
import Recipient from './recipient/Recipient'
import Status from './status/Status'

interface IInvoiceItem {
	latestInvoice: ILatestInvoice
	selectedInvoiceId: number | undefined
	toggleCheckboxes: (id?: number) => void
}

const InvoiceItem: FC<IInvoiceItem> = ({
	latestInvoice: { id, recipient, service, updatedAt },
	selectedInvoiceId,
	toggleCheckboxes
}) => {
	return (
		<div
			id={id.toString()}
			className={styles.latestInvoiceRow}
			style={
				selectedInvoiceId?.toString() === id.toString()
					? { borderLeft: '4px solid blue' }
					: { borderLeft: '4px solid white' }
			}
		>
			<input
				key={id}
				type='checkbox'
				className='invoiceNum'
				style={{ height: '20px', width: '20px' }}
				checked={selectedInvoiceId?.toString() === id.toString()}
				onChange={() => {
					toggleCheckboxes(id)
				}}
			/>
			<Recipient
				avatar={recipient.avatarPath}
				name={recipient.name}
				email={recipient.email}
			/>

			<span className={styles.invoiceNum}>#{id}</span>

			<Status status={'Undefined'} />

			<div className={styles.date}>
				<span>{convertDate(updatedAt)[0]}</span>
			</div>

			<span className={styles.service}>
				{service === undefined ? 'Service undefined' : service}
			</span>

			<Actions />
		</div>
	)
}

export default InvoiceItem
