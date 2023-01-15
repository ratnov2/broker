import Image from 'next/image'
import { FC } from 'react'

import styles from './Invoices.module.scss'
import { formatDate } from './format-date'
import InvoiceStatus from './invoice-status/InvoiceStatus'
import { IInvoice } from './invoices.interface'

const InvoiceItem: FC<{ invoice: IInvoice }> = ({ invoice }) => {
	return (
		<div className={styles.invoice}>
			<div>
				{invoice.recipient?.avatarPath ? (
					<div className='w-12 h-12 rounded-[50%] overflow-hidden'>
						<Image
							alt={invoice.recipient.name}
							src={invoice.recipient.avatarPath}
							width={48}
							height={48}
							draggable={false}
						/>
					</div>
				) : (
					<div className='shrink-0 w-12 h-12 bg-gray rounded-[50%]'></div>
				)}
				<div>
					<span>{invoice.recipient?.name}</span>
					<p>{formatDate(invoice.createdAt)}</p>
				</div>
			</div>

			{invoice.status && <InvoiceStatus status={invoice.status} />}
		</div>
	)
}

export default InvoiceItem
