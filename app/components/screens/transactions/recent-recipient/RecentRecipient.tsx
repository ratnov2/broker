import { FC } from 'react'

import RecipientDetails from '../recipient-details/RecipientDetails'
import RecipientRibbon from '../recipient-ribbon/RecipientRibbon'

const RecentRecipient: FC = () => {
	return (
		<div className='flex flex-col bg-white px-6 py-7 overflow-hidden shadow rounded-xl space-y-4'>
			<RecipientRibbon />
			<RecipientDetails />
		</div>
	)
}

export default RecentRecipient
