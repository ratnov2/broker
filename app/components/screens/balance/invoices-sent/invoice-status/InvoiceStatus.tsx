import cn from 'clsx'
import { FC } from 'react'
import {
	AiOutlineCheckCircle,
	AiOutlineExclamationCircle,
	AiOutlineQuestionCircle
} from 'react-icons/ai'


import styles from './InvoiceStatus.module.scss'

const InvoiceStatus: FC<{ status: string }> = ({ status }) => {
	return (
		<div className={cn(styles.status, styles[status])}>
			{status === 'Pending' ? (
				<AiOutlineQuestionCircle size={18} color='#8E8EA1' />
			) : status === 'Complete' ? (
				<AiOutlineCheckCircle size={18} color='#00A389' />
			) : (
				<AiOutlineExclamationCircle size={18} color='#FF4A55' />
			)}
		</div>
	)
}

export default InvoiceStatus
