import { FC } from 'react'

import Layout from '@/layout/Layout'

const Invoices: FC = () => {
	return (
		<Layout title='Invoices'>
			<div className='flex h-screen w-full items-center justify-center'>
				<h1 className='text-center text-7xl font-bold text-red'>RED Project</h1>
			</div>
		</Layout>
	)
}

export default Invoices
