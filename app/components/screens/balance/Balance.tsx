import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import Modal from '@/screens/balance/modal/Modal'
import BalanceTransfer from '@/screens/balance/top/BalanceTransfer/BalanceTransfer'
import BalanceInformation from '@/screens/balance/top/balanceInformation/BalanceInformation'

const Balance: FC = () => {
	const [isModalOpened, setIsModalOpened] = useState(false)

	return (
		<Layout title='Balance'>
			<h1 className={'font-bold text-3xl'}>Balance</h1>
			<div className={'flex justify-between mt-5 gap-[40px]'}>
				<BalanceInformation />

				<BalanceTransfer setIsModalOpened={setIsModalOpened} />
			</div>

			<Modal
				isModalOpened={isModalOpened}
				setIsModalOpened={setIsModalOpened}
			/>
		</Layout>
	)
}

export default Balance
