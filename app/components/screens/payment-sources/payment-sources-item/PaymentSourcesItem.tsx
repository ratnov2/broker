import { FC } from 'react'
import { BsThreeDots } from 'react-icons/bs'

import styles from './PaymentSourcesItem.module.scss'
import { IPaymentContact } from './payment-sources-item.interface'
import RecipientContact from './recipient-contacts/RecipientContacts'
import Recipient from './recipient/Recipient'

interface IPaymentSourcesItem {
	paymentContact: IPaymentContact
}
const PaymentSourcesItem: FC<IPaymentSourcesItem> = ({ paymentContact }) => {


	
	return (
		<div className={styles.contactContainer}>
			<div className={'flex flex-row'}>
				<Recipient
					avatar={paymentContact.avatar}
					name={paymentContact.name}
					company={paymentContact.company}
				/>
				<BsThreeDots className=' text-2xl text-gray'/>
			</div>
			<RecipientContact
				phone={paymentContact.phone}
				email={paymentContact.email}
				paymentDue={paymentContact.paymentDue}
			/>
		</div>
	)
}

export default PaymentSourcesItem
