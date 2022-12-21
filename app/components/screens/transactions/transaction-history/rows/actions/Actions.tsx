import cn from 'clsx'
import { FC, useState } from 'react'

import styles from './Actions.module.scss'

const Actions: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false)

	return (
		<div style={{ display: 'flex' }}>
			<button
				onClick={() => setIsActive(!isActive)}
				className={cn(styles.actions, isActive && 'rotate-90')}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	)
}

export default Actions
