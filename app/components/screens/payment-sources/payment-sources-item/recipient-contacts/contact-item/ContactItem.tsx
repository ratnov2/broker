import { FC } from 'react'
import { FiCalendar, FiPhone } from 'react-icons/fi'
import { TbMail } from 'react-icons/tb'

import styles from './ContactItem.module.scss'

interface IContactItem {
	text: string
	type: 'email' | 'phone' | 'dueDate'
}

const ContactItem: FC<IContactItem> = ({ text, type }) => {
	const switchIcon = (param: string) => {
		switch (param) {
			case 'email':
				return <TbMail className={styles.icon} />
			case 'phone':
				return <FiPhone className={styles.icon} />
			case 'dueDate':
				return <FiCalendar className={styles.icon} />
			default:
				return <div className={styles.icon} />
		}
	}

	return (
		<>
			<div className='flex flex-row  mt-3 items-center'>
				{switchIcon(type)}
				<div className='text-[17px] font-bold pl-2'>{text}</div>
			</div>
		</>
	)
}

export default ContactItem
