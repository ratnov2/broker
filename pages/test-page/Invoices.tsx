import { FC } from 'react';

import Layout from '@/layout/Layout';

import { useInvoices } from '@/hooks/useInvoices';

const Invoices: FC = () => {
	const { latestInvoices, isLoadingLatestInvoices } = useInvoices()

	return (
		<Layout title='Transactions'>
			{isLoadingLatestInvoices ? (
				<div className='flex h-screen w-full items-center justify-center'>
					<h1 className='text-center text-7xl font-bold text-red'>
						LOADING DATA
					</h1>
				</div>
			) : (
				latestInvoices?.map(invoice => (
					<div key={invoice.id.toString()} className=''>
						invoice id: {invoice.id} invoice.amount: {invoice.amount} invoice.updatedAt: {invoice.updatedAt}
					</div>
				))
			)}
		</Layout>
	)
}

export default Invoices