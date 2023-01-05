import { IOverviewInvoice } from '@/shared/types/invoice.types'
import { FC } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

import styles from './OverviewInvoices.module.scss'
import RoundedIcon from './RoundedIcon'

interface IOverviewElement {
	overviewInvoice: IOverviewInvoice
}

const OverviewElement: FC<IOverviewElement> = ({
	overviewInvoice: { overviewType, amount }
}) => {
	return (
		<div className={styles.divContainer}>
			<div className='flex justify-between'>
				<div className='flex flex-col' style={{ flex: '1 1 auto' }}>
					<div className='text-lg text-gray'>{overviewType}</div>
					<div className=' text-3xl font-bold'>{amount}</div>
				</div>
				<RoundedIcon overviewInvoiceType={overviewType} />
			</div>
		</div>
	)
}

export default OverviewElement
