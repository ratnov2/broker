import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Logout from '@/layout/header/user-menu/logout/Logout'

import { useProfile } from '@/hooks/useProfile'

import styles from './UserMenu.module.scss'
import UserLinks from './user-links/UserLinks'

const UserMenu: FC = () => {
	const { profile } = useProfile()

	return (
		<nav>
			<Logout />
			<UserLinks />
			{profile ? (
				<Link href='/profile' className={styles.profile}>
					<Image
						className={styles.profile_image}
						src={profile.avatarPath? profile.avatarPath : '/images/avatar-empty.png'} 
						width={56}
						height={56}
						alt='profile'
					/>
					<span>{profile?.name}</span>
				</Link>
			) : (
				<div>Loading ...</div>
			)}
		</nav>
	)
}

export default UserMenu
