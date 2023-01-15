import cn from 'clsx'
import { FC } from 'react'

import styles from './Status.module.scss'

const Status: FC<{ status: string }> = ({ status }) => {
	return <div className={cn(styles.status, styles[status])}>{status}</div>
}

export default Status
