import { FC } from 'react'
import {
	HiOutlineLocationMarker,
	HiOutlineMail,
	HiOutlinePhone
} from 'react-icons/hi'

import { IUserContact } from '@/shared/types/users.types'

import styles from './ContactItems.module.scss'

interface IContactItems {
	selectedRecipient?: IUserContact
	title: string
	type: 'address' | 'email' | 'phone'
	value?: string
}

const switchIcon = (param: string) => {
	switch (param) {
		case 'email':
			return <HiOutlineMail size={32} className={styles.icon} color='white' />
		case 'phone':
			return <HiOutlinePhone size={32} className={styles.icon} color='white' />
		case 'address':
			return (
				<HiOutlineLocationMarker
					size={32}
					className={styles.icon}
					color='white'
				/>
			)
		default:
			return <div className={styles.icon} />
	}
}

const ContactItems: FC<IContactItems> = ({ title, value, type }) => {
	return (
		<>
			<div className={styles.contactContainer}>
				{switchIcon(type)}
				<div>
					<div>{title}</div>
					<div>{value}</div>
				</div>
			</div>
		</>
	)
}

export default ContactItems
