import { FC } from 'react';
import Layout from '@/layout/Layout'


export default function Transactions() {
    return (
		<Layout title='Dashboard'>
			<div className='flex h-screen w-full items-center justify-center'>
				<h1 className='text-center text-7xl font-bold text-red'>
                Transactions
				</h1>
			</div>
		</Layout>
	);
}

 