import { FC, useEffect, useState } from 'react'

import OverviewElement from './OverviewInvoicesElement'
import { overviewFakeData } from './overview-invoices.data'
import { IOverviewInvoice } from './overview-invoices.interface'

interface IOverview {
	period: string
}

const OverviewInvoices: FC<IOverview> = ({ period }) => {
	const [overviewElements, setOverviewElements] = useState<
		IOverviewInvoice[]
	>([])
	const [isLoadingOverviewInvoices, setIsLoadingOverviewInvoices] =
		useState(false)

	useEffect(() => {
		const fetchOverviewInvoices = async () => {
			setIsLoadingOverviewInvoices(true)
			const res = overviewFakeData as IOverviewInvoice[] //await axios.get('https://??????/overview-invoices/)
			setOverviewElements(res)
			setIsLoadingOverviewInvoices(false)
		}

		fetchOverviewInvoices()
	}, [])

	if (isLoadingOverviewInvoices) {
		return (
			<div className='h-[225px] flex items-center justify-center'>
				Loading overview invoices..
			</div>
		)
	}
	return (
		<div className='flex justify-between'>
			{overviewElements.length ? (
				<>
					{overviewElements.map(overviewElement => (
						<OverviewElement
							key={overviewElement.overviewType}
							overviewInvoice={overviewElement}
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
