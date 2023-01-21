import cn from 'clsx'
import { FC } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsCheckCircle, BsExclamationCircle } from 'react-icons/bs'

import styles from './Status.module.scss'

const GetIcon: FC<{ status: string }> = ({ status }) => {
	return status === 'Sent' ? (
		<BsCheckCircle size='24px' />
	) : status === 'Unpaid' ? (
		<BsExclamationCircle size='24px' />
	) : status === 'Complete' ? (
		<BsCheckCircle size='24px' />
	) : status === 'New' ? (
		<AiOutlineQuestionCircle size='24px' />
	) : (
		<BsExclamationCircle size='24px' />
	)
}

const Status: FC<{ status: string }> = ({ status = 'New' }) => {
	return (
		<div
			className={cn(
				styles.status,
				status === 'Sent'
					? 'bg-purple text-white'
					: status === 'Unpaid'
					? 'bg-red text-white'
					: status === 'Complete'
					? 'bg-light-blue text-white'
					: status === 'New'
					? 'bg-orange text-white'
					: 'bg-red text-white'
			)}
		>
			<GetIcon status={status} />
			<div className='pl-2'>{status}</div>
		</div>
	)
}

export default Status
