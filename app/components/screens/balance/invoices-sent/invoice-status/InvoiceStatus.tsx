import cn from 'clsx'
import { FC } from 'react'
import {
	AiOutlineCheckCircle,
	AiOutlineExclamationCircle,
	AiOutlineQuestionCircle
} from 'react-icons/ai'

import { TypeStatus } from '../invoices.interface'

import styles from './InvoiceStatus.module.scss'

const InvoiceStatus: FC<{ status: TypeStatus }> = ({ status }) => {
	return (
		<div
			className={cn(
				styles.status,
				styles[status]
			)}
		>
			{status === 'pending' ? (
				<AiOutlineQuestionCircle size={18} color='#8E8EA1' />
			) : status === 'completed' ? (
				<AiOutlineCheckCircle size={18} color='#00A389' />
			) : (
				<AiOutlineExclamationCircle size={18} color='#FF4A55' />
			)}
		</div>
	)
}

export default InvoiceStatus
