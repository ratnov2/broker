import cn from 'clsx'
import { FC } from 'react'

import { useHeader } from '@/hooks/header/useHeader'

import styles from './Header.module.scss'
import UserMenu from './user-menu/UserMenu'

const Header: FC = () => {
	const { classNames } = useHeader()

	return (
		<header className={cn(styles.header, styles[classNames])}>
			<UserMenu />
		</header>
	)
}

export default Header
