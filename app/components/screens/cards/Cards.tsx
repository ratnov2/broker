import { FC } from 'react'

import Layout from '@/layout/Layout'

import CardsList from './cards-list/CardsList'

const Cards: FC = () => {
	return (
		<Layout title='Invoices'>
			<div className='h-full w-full mt-12'>
				{/*// <Cards />*/}
				<CardsList />
			</div>
		</Layout>
	)
}

export default Cards
