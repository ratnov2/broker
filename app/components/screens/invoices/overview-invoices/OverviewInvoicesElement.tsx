import { FC } from 'react'

import { IOverviewInvoice } from '@/shared/types/invoice.types'

import styles from './OverviewInvoices.module.scss'
import RoundedIcon from './OverviewRoundedIcon'

interface IOverviewElement {
	overviewInvoice: IOverviewInvoice
}

const OverviewElement: FC<IOverviewElement> = ({
	overviewInvoice: { overviewType, amount }
}) => {
	{
		console.log(overviewType)
	}
	return (
		<div className={styles.divContainer}>
			<div className='flex justify-between'>
				<div className='flex flex-col' style={{ flex: '1 1 auto' }}>
					<div className='text-lg text-gray'>
						{overviewType === 'sent'
							? 'Invoice Sent'
							: overviewType === 'paid'
							? 'Paid Invoice'
							: overviewType === 'pending'
							? 'Pending Invoice'
							: overviewType === 'unpaid'
							? 'Unpaid Invoice'
							: ''}
					</div>
					<div className=' text-3xl font-bold'>{amount}</div>
				</div>
				<RoundedIcon overviewType={overviewType} />
			</div>
		</div>
	)
}

export default OverviewElement
