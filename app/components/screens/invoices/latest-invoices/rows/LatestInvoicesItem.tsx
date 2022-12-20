import Image from 'next/image'
import { FC, useState } from 'react'

import { convertDate } from '@/utils/convert-date'

import Menu from '../actions/Actions'
import Status from '../status/Status'

import styles from './LatestInvoicesItem.module.scss'
import { ILatestInvoice } from './latest-invoices.interface'

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
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div
			id={_id.toString()}
			className={styles.latestInvoiceRow}
			style={isChecked ? { borderLeft: '4px solid blue' } : {borderLeft: '4px solid white'}}
		>
			<input
				key={invoiceNum}
				type='checkbox'
				className='invoiceNum'
				style={{ height: '20px', width: '20px' }}
				checked={isChecked}
				onClick={() => {setIsChecked(!isChecked)}}
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
				<p>{convertDate(date)[0]}</p>
				<span>{convertDate(date)[1]}</span>
			</div>

			<span className={styles.service}>{service}</span>

			<Menu />
		</div>
	)
}

export default InvoiceItem
