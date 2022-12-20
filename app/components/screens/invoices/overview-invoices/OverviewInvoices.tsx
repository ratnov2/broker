import { FC } from 'react'

import Loader from '@/ui/pagination/loader/Loader'

import OverviewElement from './OverviewInvoicesElement'
import { IOverviewInvoice } from './overview-invoices.interface'

interface IOverview {
	period: string
	isLoading: boolean
	overviewInvoices?: IOverviewInvoice[]
}

const OverviewInvoices: FC<IOverview> = ({
	period,
	isLoading,
	overviewInvoices
}) => {
	return (
		<div className='flex justify-between'>
			{isLoading ? (
				<Loader />
			) : overviewInvoices?.length ? (
				<>
					{overviewInvoices.map(overviewInvoice => (
						<OverviewElement
							key={overviewInvoice.overviewType}
							overviewInvoice={overviewInvoice}
							period={period}
						/>
					))}
				</>
			) : (
				<div className='h-[225px] flex items-center justify-center'>
					Invoices for overview not found
				</div>
			)}
		</div>
	)
}

export default OverviewInvoices
