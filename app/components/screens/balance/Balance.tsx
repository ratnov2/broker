import { FC } from 'react'

import Layout from '@/layout/Layout'

import BalanceTransfer from '@/screens/balance/top/BalanceTransfer/BalanceTransfer'
import BalanceInformation from '@/screens/balance/top/balanceInformation/BalanceInformation'
import { useTest } from '@/hooks/useTest'

const Balance: FC = () => {
const {data} = useTest()
console.log(data);
	

	return (
		<Layout title='Balance'>
			<div className=''>
				<h1 className={'font-bold text-3xl'}>Balance</h1>
				<div className={'flex justify-between mt-5 gap-[40px]'}>
					<BalanceInformation />

					<BalanceTransfer />
				</div>
			</div>
		</Layout>
	)
}

export default Balance
