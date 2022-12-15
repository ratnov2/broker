import cn from 'clsx'
import { FC } from 'react'

import styles from './Status.module.scss'

const Status: FC<{ status: 'pending' | 'completed' | 'canceled' }> = ({
	status
}) => {
	return (
		<div
			className={cn(
				styles.status,
				status === 'pending'
					? 'bg-gray/[0.25] text-gray'
					: status === 'completed'
					? 'bg-green/[0.1] text-green'
					: status === 'canceled'
					? 'bg-red/[0.1] text-red'
					: ''
			)}
		>
			{status}
		</div>
	)
}

export default Status
