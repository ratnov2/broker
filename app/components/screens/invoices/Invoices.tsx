import { FC } from 'react'

import Layout from '@/layout/Layout'

import LatestInvoices from './LatestInvoices/LatestInvoicesTable'
import OverView from './Overview/OverView'

const Invoices: FC = () => {
	return (
		<Layout title='Invoices'>
			<div className='items-left h-screen justify-left'>
				<h1 className='text-top text-4xl font-bold text-black'>
					Invoices
				</h1>
				<OverView />
				<LatestInvoices
					tableItems={[]}
					isLoading={false}
					headerItems={[
						'Recipient',
						'Invoice',
						'Status',
						'Date',
						'Service',
						'Action'
					]}
					printHandler={function (): void {
						throw new Error('Function not implemented.')
					}}
				/>
			</div>
		</Layout>
	)
}

export default Invoices
