import { FC } from 'react'

import Layout from '@/layout/Layout'

import BalanceInformation from '@/screens/balance/top/BalanceInformation'
import BalanceTransfer from '@/screens/balance/top/BalanceTransfer'

const Balance: FC = () => {
	return (
		<Layout title='Balance'>
			<div className=''>
				<h1 className={'font-bold text-3xl'}>Balance</h1>

				<div className={'flex justify-between mt-5'}>
					<BalanceInformation />

					<BalanceTransfer />
				</div>
			</div>
		</Layout>
	)
}

export default Balance
