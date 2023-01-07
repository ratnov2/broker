import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Logout from '@/layout/header/user-menu/logout/Logout'

import { useProfile } from '@/hooks/useProfile'

import { avatarPath } from '@/utils/avatarPath'

import styles from './UserMenu.module.scss'
import UserLinks from './user-links/UserLinks'

const UserMenu: FC = () => {
	const { data: profile } = useProfile()

	return (
		<nav>
			<Logout />
			<UserLinks />
			<Link href='/profile' className={styles.profile}>
				<Image
					className={styles.profile_image}
					src={avatarPath(profile)}
					width={56}
					height={56}
					alt='profile'
				/>
				<span>{profile?.name}</span>
			</Link>
		</nav>
	)
}

export default UserMenu
