import Link from 'next/link'
import { FC } from 'react'

import Button from '@/ui/button/Button'

const InvoicesTopTitle: FC = () => {
	return (
		<div className='flex justify-between items-center mb-4 flex-wrap'>
			<h1 className='text-4xl font-bold text-black'>Invoices</h1>
			<div className='flex justify-between mb-4'>
				<Button
					variant='primary'
					size={'xl'}
					type='submit'
					className='px-10 py-3 bg-purple rounded-full text-white font-semibold w-[250px]'
				>
					<Link href={'/add-new-invoice'}>
						<span>Add new invoice</span>
					</Link>
				</Button>
			</div>
		</div>
	)
}

export default InvoicesTopTitle
