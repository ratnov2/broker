import Image from 'next/image'
import { FC } from 'react'

import { convertDate } from '@/utils/convert-date'
import { getUserById } from '@/utils/get-user-by-id'

import styles from './Transfer.module.scss'
import Menu from './menu/Menu'
import Status from './status/Status'
import { ITransfer } from './transfer.interface'

const TransferItem: FC<{
	transfer: ITransfer
	refetchTransfers: () => void
}> = ({
	transfer: {
		id,
		amount,
		createdAt: date,
		status,
		invoice: { recipientId }
	},
	refetchTransfers
}) => {
	const recipient = getUserById(recipientId)

	return (
		<div className={styles.transfer}>
			<div className={styles.clientInfo}>
				{recipient?.avatarPath ? (
					<div className='shrink-0 w-12 h-12 rounded-[50%] overflow-hidden'>
						<Image
							alt={recipient.name}
							src={recipient.avatarPath}
							width={48}
							height={48}
							draggable={false}
						/>
					</div>
				) : (
					<div className='shrink-0 w-12 h-12 bg-gray rounded-[50%]'></div>
				)}
				<span>{recipient?.name}</span>
			</div>

			<span className={styles.transferId}>{`#${id}`}</span>

			<span className={styles.amount}>{`$ ${amount}`}</span>

			<div className={styles.date}>
				<p>{convertDate(date)[0]}</p>
				<span>{convertDate(date)[1]}</span>
			</div>

			<Status status={status} />

			<Menu transferId={id} refetchTransfers={refetchTransfers} />
		</div>
	)
}

export default TransferItem
