import Image from 'next/image'
import { FC } from 'react'

import InvoiceStatus from './invoice-status/InvoiceStatus'
import styles from './Invoices.module.scss'
import { formatDate } from './format-date'
import { IInvoice } from './invoices.interface'

const InvoiceItem: FC<{ invoice: IInvoice }> = ({
	invoice: { image, name, date, status }
}) => {
	return (
		<div className={styles.invoice}>
			<div>
				{image ? (
					<Image
						alt={name}
						src={image}
						width={48}
						height={48}
						draggable={false}
					/>
				) : (
					<div className='shrink-0 w-12 h-12 bg-gray rounded-[50%]'></div>
				)}
				<div>
					<span>{name}</span>
					<p>{formatDate(date)}</p>
				</div>
			</div>

			<InvoiceStatus status={status} />
		</div>
	)
}

export default InvoiceItem
