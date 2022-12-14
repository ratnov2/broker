import { FC } from 'react';


interface ILatestInvoiceActions {
	printHandler: () => void
}

const LatestInvoiceActions: FC<ILatestInvoiceActions> = ({printHandler}) => {
	

	return (
		<div>
			<button onClick={printHandler}>
				{/* <MaterialIcon /> */}
				</button>
		</div>
	)
}

export default LatestInvoiceActions