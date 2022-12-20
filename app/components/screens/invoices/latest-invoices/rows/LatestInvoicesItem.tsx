import Image from 'next/image'
import { FC, useState } from 'react'

import { convertDate } from '@/utils/convert-date'

import styles from './LatestInvoicesItem.module.scss'
import Menu from './actions/Actions'
import { ILatestInvoice } from './latest-invoices.interface'
import Status from './status/Status'

const InvoiceItem: FC<ILatestInvoice> = ({
	_id,
	recipientAvatar,
	name,
	invoiceNum,
	invoiceDate,
	service,
	status,
	email
}) => {
	const [checked, setChecked] = useState(false)

	const handleChange = () => {
		setChecked(!checked)
	}
	return (
		<div
			id={_id.toString()}
			className={styles.latestInvoiceRow}
			style={checked ? { borderLeft: '4px solid blue' } : {}}
		>
			<input
				key={invoiceNum}
				type='checkbox'
				className='invoiceNum'
				style={{ height: '20px', width: '20px' }}
				checked={checked}
				onSelect={handleChange}
			/>
			<div className={styles.recipient}>
				{recipientAvatar ? (
					<Image
						alt={name}
						src={recipientAvatar}
						width={48}
						height={48}
						draggable={false}
					/>
				) : (
					<div className='min-w-[48px] min-h-[48px] bg-light-gray rounded-[50%]'></div>
				)}
				<div className='flex-col'>
					<p>{name}</p>
					<span>{email}</span>
				</div>
			</div>

			<span className={styles.invoiceNum}>{invoiceNum}</span>

			<Status status={status} />

			<div className={styles.date}>
				<p>{convertDate(invoiceDate)[0]}</p>
				<span>{convertDate(invoiceDate)[1]}</span>
			</div>

			<span className={styles.service}>{service}</span>

			<Menu />
		</div>
	)
}

export default InvoiceItem
