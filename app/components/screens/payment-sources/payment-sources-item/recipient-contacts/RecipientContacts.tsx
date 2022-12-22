import { FC } from 'react'
import { AiOutlineHistory } from 'react-icons/ai'

import { convertDate } from '@/utils/convert-date'

import styles from './RecipientContact.module.scss'
import ContactItem from './contact-item/ContactItem'

interface IRecipient {
	phone: string
	email: string
	paymentDue: string
}

const roundedStyle = {
	alignSelf: 'center',
	width: '40px',
	height: '40px',
	padding: '1px',
	borderRadius: '50px',
	color: 'white'
}

const RecipientContact: FC<IRecipient> = ({ phone, email, paymentDue }) => {
	return (
		<>
			<div className={styles.recipientContact}>
				<div className='flex-col w-[50%]'>
					<span>Contact</span>
					<ContactItem text={phone} type={'phone'} />
				</div>
				<div className='flex flex-col w-[50%] ml-5'>
					<span>Payment Due</span>
					<ContactItem text={convertDate(paymentDue)[0]} type={'dueDate'} />
				</div>
			</div>
			<ContactItem text={email} type={'email'} />
		</>
	)
}

export default RecipientContact
