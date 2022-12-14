import cn from 'clsx'
import { FC } from 'react'

//import styles from '../LatestInvoices/LatestInvoicesTable.module.scss'

const LatestInvoiceTableHeader: FC<{ headerItems: string[] }> = ({
	headerItems
}) => {
	return (
		<div
			className={''}
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				fontWeight: 'bold',
				paddingTop: '20px'
			}}
		>
			<div style={{ border: '1px solid black', width: '20px', height: '20px' }}></div>
			{headerItems.map(value => (
				<div key={value}>{value}</div>
			))}
		</div>
	)
}

export default LatestInvoiceTableHeader
