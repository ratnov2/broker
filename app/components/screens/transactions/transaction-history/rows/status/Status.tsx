import cn from 'clsx'
import { FC } from 'react'
import { BsCheckCircle } from 'react-icons/bs'

import styles from './Status.module.scss'

const Status: FC<{ status: string }> = ({ status }) => {
	return (
		<div
			className={cn(
				styles.status,
				status === 'Complete'
					? 'bg-purple text-white'
					: status === 'Canceled'
					? 'bg-red text-white'
					: status === 'Pending'
					? 'bg-gray text-white'
					: ''
			)}
		>
			<div className=''>{status}</div>
		</div>
	)
}

export default Status
