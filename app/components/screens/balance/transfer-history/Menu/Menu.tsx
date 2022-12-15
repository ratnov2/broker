import cn from 'clsx'
import { FC, useState } from 'react'

import styles from './Menu.module.scss'

const Menu: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false)

	return (
		<button
			onClick={() => setIsActive(!isActive)}
			className={cn(styles.menu, isActive && 'rotate-90')}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	)
}

export default Menu
