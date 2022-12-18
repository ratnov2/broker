import Image from 'next/image'
import { FC } from 'react'

import styles from './LatestInvoices.module.scss'
//import { convertDate } from '@/utils/convertDate';
import Menu from './actions2/Actions'
import { ILatestInvoice } from './latestInvoices.interface'
import Status from './status2/Status'

const InvoiceItem: FC<{ latestInvoice: ILatestInvoice }> = ({
	latestInvoice: {
		recipientAvatar,
		name,
		invoiceNum,
		service,
		date,
		status,
		email
	}
}) => {
	return (
		<div className={styles.latestInvoiceRow}>
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
