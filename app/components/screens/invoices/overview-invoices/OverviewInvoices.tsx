import { FC } from 'react'

import Loader from '@/ui/pagination/loader/Loader'

import OverviewElement from './OverviewInvoicesElement'
import { IOverviewInvoice } from '@/shared/types/invoice.types'

interface IOverview {
	isLoading: boolean
	overviewInvoices?: IOverviewInvoice[]
}

const OverviewInvoices: FC<IOverview> = ({
	isLoading,
	overviewInvoices
}) => {
	return (
		<div className='flex justify-between gap-[40px]'>
			{isLoading ? (
				<Loader />
			) : overviewInvoices?.length ? (
				<>
					{overviewInvoices.map(overviewInvoice => (
						<OverviewElement
							key={overviewInvoice.overviewType}
							overviewInvoice={overviewInvoice}
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
