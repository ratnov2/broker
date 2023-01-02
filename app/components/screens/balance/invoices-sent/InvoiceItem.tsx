import Image from 'next/image'
import { FC } from 'react'

import styles from './Invoices.module.scss'
import { formatDate } from './format-date'
import InvoiceStatus from './invoice-status/InvoiceStatus'
import { IInvoice } from './invoices.interface'

const InvoiceItem: FC<{ invoice: IInvoice }> = ({
	invoice: {
		recipient: { name, avatarPath },
		createdAt,
		status
	}
}) => {
	return (
		<div className={styles.invoice}>
			<div>
				{avatarPath ? (
					<div className='w-12 h-12 rounded-[50%] overflow-hidden'>
						<Image
							alt={name}
							src={avatarPath}
							width={48}
							height={48}
							draggable={false}
						/>
					</div>
				) : (
					<div className='shrink-0 w-12 h-12 bg-gray rounded-[50%]'></div>
				)}
				<div>
					<span>{name}</span>
					<p>{formatDate(createdAt)}</p>
				</div>
			</div>

			{status && <InvoiceStatus status={status} />}
		</div>
	)
}

export default InvoiceItem
