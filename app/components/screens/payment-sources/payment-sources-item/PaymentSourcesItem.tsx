import { FC } from 'react'
import { BsThreeDots } from 'react-icons/bs'

import { IUserContact } from '@/shared/types/users.types'

import styles from './PaymentSourcesItem.module.scss'
import RecipientContact from './recipient-contacts/RecipientContacts'
import Recipient from './recipient/Recipient'

interface IPaymentSourcesItem {
	paymentContact: IUserContact
}
const PaymentSourcesItem: FC<IPaymentSourcesItem> = ({ paymentContact }) => {
	return (
		<div className={styles.contactContainer}>
			<div className={'flex flex-row'}>
				{paymentContact ? (
					<Recipient
						avatarPath={paymentContact.avatarPath}
						name={paymentContact.name}
						email={paymentContact.email}
					/>
				) : (
					<Recipient avatarPath={''} name={''} email={''} />
				)}
				<BsThreeDots className=' text-2xl text-gray' />
			</div>
			<RecipientContact
				phone={'+123 456 789'}
				email={paymentContact.email}
				paymentDue={'2023-01-04T11:26:10.838Z'}
			/>
		</div>
	)
}

export default PaymentSourcesItem
