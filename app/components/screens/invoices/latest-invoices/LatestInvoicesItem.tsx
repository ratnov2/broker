import Image from 'next/image'
import { FC, useState } from 'react'

import styles from './LatestInvoices.module.scss'
//import { convertDate } from '@/utils/convertDate';
import Menu from './actions/Actions'
import { ILatestInvoice } from './latest-invoices.interface'
import Status from './status/Status'

interface IInvoiceItem {
	latestInvoice: ILatestInvoice
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
	}
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
					<div className='w-12 h-12 bg-gray rounded-[50%]'></div>
				)}
				<div className='flex-col'>
					<p>{name}</p>
					<span>{email}</span>
				</div>
			</div>

			<span className={styles.invoiceNum}>{invoiceNum}</span>

			<Status status={status} />

			<div className={styles.date}>
				{/* В песочнице все ок, а тут функции convertDate не нравятся методы строк */}
				{/* <p>{convertDate(date)[0]}</p> */}
				{/* <span>{convertDate(date)[1]}</span> */}
				<p>25 Jan, 2021</p>
				<span>04:34:45 AM</span>
			</div>

			<span className={styles.service}>{service}</span>

			<Menu />
		</div>
	)
}

export default InvoiceItem
