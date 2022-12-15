import { FC } from 'react'

import Layout from '@/layout/Layout'

import TransferHistory from './transfer-history/TransferHistory'
import { fakeData } from './transfer-history/transfer.data'
import { ITransfer } from './transfer-history/transfer.interface'

const Balance: FC = () => {
	return (
		<Layout title='Balance'>
			<div className='h-screen w-full'>
				<div className='flex space-x-10'>
					{/* Не разобрался, почему ругается на типизацию */}
					<TransferHistory
						transfers={fakeData.slice(0, 5) as ITransfer[]}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Balance
