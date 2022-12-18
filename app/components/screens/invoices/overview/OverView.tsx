import { FC, useEffect, useState } from 'react';



import OverViewElement from './OverViewElement';
import { IOverViewElement } from './overview.interface';
import { overViewFakeData } from './overviewInvoices.data';


interface IOverView {
	period: string
}

const OverView: FC<IOverView> = ({
	period // Не разобрался, как прокинуть период дальше в OverViewElement вместе с overViewItem
}) => {
	const [overViewElements, setOverViewElements] = useState<IOverViewElement[]>(
		[]
	)
	const [isLoadingOverViewInvoices, setIsLoadingOverViewInvoices] =
		useState(false)

	useEffect(() => {
		const fetchOverViewInvoices = async () => {
			setIsLoadingOverViewInvoices(true)
			const res = overViewFakeData as IOverViewElement[] //await axios.get('https://??????/overview-invoices/)
			setOverViewElements(res)
			setIsLoadingOverViewInvoices(false)
		}

		fetchOverViewInvoices()
	}, [])
	
	if (isLoadingOverViewInvoices) {
		return (
			<div className='h-[225px] flex items-center justify-center'>
				Loading overview invoices..
			</div>
		)
	}
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			{overViewElements.length ? (
				<>
					{overViewElements.map(overViewElement => (
						<OverViewElement
							key={overViewElement.overViewType}
							overViewElement={overViewElement}
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

export default OverView