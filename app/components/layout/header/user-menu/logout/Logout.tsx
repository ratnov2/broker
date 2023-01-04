import { FC } from 'react'
import { AiOutlineLogout } from 'react-icons/ai'

import { useLogout } from '@/hooks/useLogout'

import styles from '../UserMenu.module.scss'

const Logout: FC = () => {
	const { logout } = useLogout()

	return (
		<div className={styles.buttons}>
			<button onClick={logout} className={styles.icon}>
				<AiOutlineLogout />
			</button>
		</div>
	)
}

export default Logout
