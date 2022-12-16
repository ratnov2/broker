import cn from 'clsx'
import { FC } from 'react'

import { TypeStatus } from '../transfer.interface'

import styles from './Status.module.scss'

const Status: FC<{ status: TypeStatus }> = ({ status }) => {
	return (
		<div
			className={cn(
				styles.status,
				status === 'pending'
					? styles.pending
					: status === 'completed'
					? styles.completed
					: status === 'canceled'
					? styles.canceled
					: ''
			)}
		>
			{status}
		</div>
	)
}

export default Status
