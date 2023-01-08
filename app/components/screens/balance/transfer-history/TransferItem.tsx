import Image from 'next/image'
import { FC } from 'react'

import { convertDate } from '@/utils/convert-date'

import styles from './Transfer.module.scss'
import Menu from './menu/Menu'
import Status from './status/Status'
import { ITransaction } from './transfer.interface'

const TransferItem: FC<{
	transfer: ITransaction
}> = ({ transfer }) => {
	return (
		<div className={styles.transfer}>
			<div className={styles.clientInfo}>
				{transfer.invoice?.recipient?.avatarPath ? (
					<div className='shrink-0 w-12 h-12 rounded-[50%] overflow-hidden'>
						<Image
							alt={transfer.invoice.recipient.name}
							src={transfer.invoice.recipient.avatarPath}
							width={48}
							height={48}
							draggable={false}
						/>
					</div>
				) : (
					<div className='shrink-0 w-12 h-12 bg-gray rounded-[50%]'></div>
				)}
				<span>{transfer.invoice?.recipient.name}</span>
			</div>

			<span className={styles.transferId}>{`#${transfer.id}`}</span>

			<span className={styles.amount}>{`$ ${transfer.amount}`}</span>

			<div className={styles.date}>
				<p>{convertDate(transfer.createdAt)[0]}</p>
				<span>{convertDate(transfer.createdAt)[1]}</span>
			</div>

			<Status status={transfer.status} />

			<Menu transferId={transfer.id} />
		</div>
	)
}

export default TransferItem
