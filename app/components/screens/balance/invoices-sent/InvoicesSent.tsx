import Link from 'next/link'
import { FC } from 'react'

import Loader from '@/ui/loader/Loader'

import InvoiceItem from './InvoiceItem'
import styles from './Invoices.module.scss'
import { IInvoice } from './invoices.interface'

interface IInvoicesSentProps {
	isLoading: boolean
	invoices?: IInvoice[]
}

const InvoicesSent: FC<IInvoicesSentProps> = ({ isLoading, invoices }) => {
	return (
		<div className={styles.invoicesSent}>
			<h2>Invoices Sent</h2>

			{isLoading ? (
				<Loader />
			) : invoices?.length ? (
				<>
					<div className='h-[536px]'>
						{invoices.map(invoice => (
							<InvoiceItem key={invoice.id} invoice={invoice} />
						))}
					</div>
					<Link href={'/invoices'}>
						<button>View more</button>
					</Link>
				</>
			) : (
				<div className='h-[536px] text-center flex font-bold text-xl items-center justify-center'>
					There is no invoices yet!
				</div>
			)}
		</div>
	)
}

export default InvoicesSent
