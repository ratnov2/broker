import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import InvoicesSent from './invoices-sent/InvoicesSent'
import TransferHistory from './transfer-history/TransferHistory'
import { useBalance } from './useBalance'

const Balance: FC = () => {
	const [currentPage, setCurrentPage] = useState(1)

	const { isLoadingTransfers, transfers, isLoadingInvoices, invoices } =
		useBalance(currentPage)

	return (
		<Layout title='Balance'>
			<div className='h-screen w-full'>
				<div className='flex space-x-10 mt-10'>
					<TransferHistory
						isLoading={isLoadingTransfers}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						transfers={transfers}
					/>
					<InvoicesSent isLoading={isLoadingInvoices} invoices={invoices} />
				</div>
			</div>
		</Layout>
	)
}

export default Balance
