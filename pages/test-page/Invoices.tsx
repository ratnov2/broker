import { FC } from 'react';
import { QueryClient } from 'react-query';

import Layout from '@/layout/Layout';


import { useInvoices } from '@/hooks/useInvoices'


const Invoices: FC = () => {
	const { invoices, isLoadingInvoices } = useInvoices()

	return (
		<Layout title='Transactions'>
			{isLoadingInvoices ? (
				<div className='flex h-screen w-full items-center justify-center'>
					<h1 className='text-center text-7xl font-bold text-red'>
						LOADING DATA
					</h1>
				</div>
			) : (
				invoices?.map(invoice => (
					<div key={invoice.id.toString()} className='flex h-screen w-full'>
						invoice id: {invoice.id} invoice.amount: {invoice.amount}
					</div>
				))
			)}
		</Layout>
	)
}

export default Invoices