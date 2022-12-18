import { FC } from 'react';



import Layout from '@/layout/Layout';



import { fakeLatestInvoices } from './latest-invoices/LatestInvoices.data';
import { ILatestInvoice } from './latest-invoices/LatestInvoices.interface';
import LatestInvoicesTable from './latest-invoices/LatestInvoicesTable';
import OverView from './overview/OverView';
import { overViewFakeData } from './overview/OvervieInvoices.data'
import { IOverViewElement } from './overview/Overview.interface';


const Balance: FC = () => {
	return (
		<Layout title='Invoices'>
			<div className='h-screen w-full'>
				<h1 className='text-top text-4xl font-bold text-black'>
					Invoices
				</h1>
				<OverView overViewElements={overViewFakeData as IOverViewElement[]} isLoading={false} period={'month'} />
				<LatestInvoicesTable
					latestInvoices={fakeLatestInvoices.slice(0, 5) as ILatestInvoice[]}
					isLoading={false}
				/>
			</div>
		</Layout>
	)
}

export default Balance