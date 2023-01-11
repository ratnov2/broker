import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import { useCards } from '@/hooks/bankAccount/useCards'

import Modal from '@/screens/balance/modal/Modal'
import BalanceInformation from '@/screens/balance/top/balance-information/BalanceInformation'
import BalanceTransfer from '@/screens/balance/top/balance-transfer/BalanceTransfer'

const Balance: FC = () => {
	const [isModalOpened, setIsModalOpened] = useState(false)

	const { data: userCardsData } = useCards()

	return (
		<Layout title='Balance'>
			<h1 className={'font-bold text-3xl'}>Balance</h1>
			<div className={'flex justify-between mt-5 gap-[40px]'}>
				<BalanceInformation userCardsData={userCardsData} />

				<BalanceTransfer
					userCardsData={userCardsData}
					setIsModalOpened={setIsModalOpened}
				/>
			</div>

			<Modal
				isModalOpened={isModalOpened}
				setIsModalOpened={setIsModalOpened}
			/>
		</Layout>
	)
}

export default Balance
