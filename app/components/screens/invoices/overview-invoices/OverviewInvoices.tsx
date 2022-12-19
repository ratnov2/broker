import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';



import OverviewElement from './OverviewInvoicesElement';
import { overviewFakeData } from './overview-invoices.data';
import { IOverviewInvoice } from './overview-invoices.interface';
import Loader from '@/ui/pagination/loader/Loader';


interface IOverview {
	period: string
	isLoading: boolean
	// currentPage: number
	// setCurrentPage: Dispatch<SetStateAction<number>>
	overviewInvoices?: IOverviewInvoice[]
}

const OverviewInvoices: FC<IOverview> = ({
	period,
	isLoading,
	overviewInvoices
}) => {
	// const [overviewElements, setOverviewElements] = useState<
	// 	IOverviewInvoice[]
	// >([])
	// const [isLoadingOverviewInvoices, setIsLoadingOverviewInvoices] =
	// 	useState(false)

	// useEffect(() => {
	// 	const fetchOverviewInvoices = async () => {
	// 		setIsLoadingOverviewInvoices(true)
	// 		const res = overviewFakeData as IOverviewInvoice[] //await axios.get('https://??????/overview-invoices/)
	// 		setOverviewElements(res)
	// 		setIsLoadingOverviewInvoices(false)
	// 	}

	// 	fetchOverviewInvoices()
	// }, [])

	// if (isLoadingOverviewInvoices) {
	// 	return (
	// 		<div className='h-[225px] flex items-center justify-center'>
	// 			Loading overview invoices..
	// 		</div>
	// 	)
	// }
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