import cn from 'clsx'
import { FC } from 'react'
import { BsCheckCircle } from 'react-icons/bs'

import styles from '../LatestInvoices.module.scss'

const Status: FC<{ status: 'Sent' | 'Unpaid' | 'Paid' | 'Pending' }> = ({
	status
}) => {
	return (
		<div
			className={cn(
				styles.status,
				status === 'Sent'
					? 'bg-purple text-white'
					: status === 'Unpaid'
					? 'bg-red text-white'
					: status === 'Paid'
					? 'bg-light-blue text-white'
					: status === 'Pending'
					? 'bg-orange text-white'
					: ''
			)}
		>
			<div>
				<BsCheckCircle size='24px' />
			</div>
			<div className='pl-2'>{status}</div>
		</div>
	)
}

export default Status
