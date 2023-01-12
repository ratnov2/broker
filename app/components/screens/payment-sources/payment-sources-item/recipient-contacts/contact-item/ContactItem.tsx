import { FC } from 'react';
import { HiOutlineCalendar, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'



import styles from './ContactItem.module.scss';


interface IContactItem {
	text: string
	type: 'email' | 'phone' | 'dueDate'
}

const switchIcon = (param: string) => {
	switch (param) {
		case 'email':
			return <HiOutlineMail size={32} className={styles.icon} color='white' />
		case 'phone':
			return <HiOutlinePhone size={32} className={styles.icon} color='white' />
		case 'dueDate':
			return <HiOutlineCalendar size={32} className={styles.icon} color='white' />
		default:
			return <div className={styles.icon} />
	}
}

const ContactItem: FC<IContactItem> = ({ text, type }) => {
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