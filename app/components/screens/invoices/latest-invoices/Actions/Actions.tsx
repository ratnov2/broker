import cn from 'clsx'
import { FC, useState } from 'react'
import { AiOutlinePrinter } from 'react-icons/ai'

import styles from '../LatestInvoices.module.scss'

const Actions: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false)

	return (
		<div style={{ display: 'flex' }}>
			<AiOutlinePrinter onClick={
				() => {
					alert('Function not implemented.')
				}} size='24px'/>
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
