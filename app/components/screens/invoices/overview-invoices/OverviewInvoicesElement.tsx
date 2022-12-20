import { FC } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

import styles from './OverviewInvoices.module.scss'
import RoundedIcon from './RoundedIcon'
import { IOverviewInvoice } from './overview-invoices.interface'

interface IOverviewElement {
	overviewInvoice: IOverviewInvoice
	period: string
}

const OverviewElement: FC<IOverviewElement> = ({
	overviewInvoice: { overviewType, amount, compare },
	period
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
			<div className='w-full'>
				<div style={{ float: 'left' }}>
					{compare >= 0 ? (
						<AiFillCaretUp className='text-green' />
					) : (
						<AiFillCaretDown className='text-red' />
					)}
					<div style={{ float: 'left', clear: 'left' }}>
						<span
							className='text-lg font-bold'
							style={{
								color: compare >= 0 ? 'green' : 'red'
							}}
						>
							{compare}%
						</span>
						<span className='text-lg text-gray'>
							{' '}
							than last {period}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OverviewElement
