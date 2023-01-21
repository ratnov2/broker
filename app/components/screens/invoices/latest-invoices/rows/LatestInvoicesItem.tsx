import { FC } from 'react'

import { IInvoice } from '@/shared/types/invoice.types'

import { convertDate } from '@/utils/convert-date'

import styles from './LatestInvoicesItem.module.scss'
import Actions from './actions/Actions'
import Recipient from './recipient/Recipient'
import Status from './status/Status'

interface IInvoiceItem {
	latestInvoice: IInvoice
	selectedInvoiceId: number | undefined
	toggleCheckboxes: (id?: number) => void
}

const InvoiceItem: FC<IInvoiceItem> = ({
	latestInvoice,
	selectedInvoiceId,
	toggleCheckboxes
}) => {
	return (
		<div
			id={latestInvoice.id.toString()}
			className={styles.latestInvoiceRow}
			style={
				selectedInvoiceId?.toString() === latestInvoice.id.toString()
					? { borderLeft: '4px solid blue' }
					: { borderLeft: '4px solid white' }
			}
		>
			<input
				key={latestInvoice.id}
				type='checkbox'
				className='invoiceNum'
				style={{ height: '20px', width: '20px' }}
				checked={selectedInvoiceId?.toString() === latestInvoice.id.toString()}
				onChange={() => {
					toggleCheckboxes(latestInvoice.id)
				}}
			/>
			{latestInvoice.recipient ? (
				<Recipient
					avatar={latestInvoice.recipient.avatarPath}
					name={latestInvoice.recipient.name}
					email={latestInvoice.recipient.email}
				/>
			) : (
				<Recipient avatar={''} name={''} email={''} />
			)}
			<span className={styles.invoiceNum}>#{latestInvoice.id}</span>
			<Status status={latestInvoice.transactions[0]?.status} />
			<div className={styles.date}>
				<span>{convertDate(latestInvoice.updatedAt)[0]}</span>
			</div>
			<span className={styles.service}>
				{latestInvoice.items === undefined
					? 'Service undefined'
					: latestInvoice.items.map((item, index) =>
							index !== latestInvoice.items.length - 1
								? item.name + ', '
								: item.name
					  )}
			</span>
			<Actions />
		</div>
	)
}

export default InvoiceItem
