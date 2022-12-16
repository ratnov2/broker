import Image from 'next/image'
import { FC } from 'react'

import { convertDate } from '@/utils/convert-date'

import Menu from './Menu/Menu'
import Status from './Status/Status'
import styles from './Transfer.module.scss'
import { ITransfer } from './transfer.interface'

const TransferItem: FC<{ transfer: ITransfer }> = ({
	transfer: { image, name, id, amount, date, status }
}) => {
	return (
		<div className={styles.transfer}>
			<div className={styles.clientInfo}>
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
				<span>{name}</span>
			</div>

			<span className={styles.transferId}>{`#${id}`}</span>

			<span className={styles.amount}>{`$ ${amount}`}</span>

			<div className={styles.date}>
				<p>{convertDate(date)[0]}</p>
				<span>{convertDate(date)[1]}</span>
			</div>

			<Status status={status} />

			<Menu />
		</div>
	)
}

export default TransferItem
