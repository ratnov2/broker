import { FC } from 'react'

import { IProgressBar } from '@/screens/balance/interfaces/balanceStats.interface'
import BalanceStats from '@/screens/balance/top/BalanceStats'
import CardInfoItem from '@/screens/balance/top/CardInfoItem'
import Progressbar from '@/screens/balance/top/Progressbar'
import { card, stats } from '@/screens/balance/top/balance.data'

const BalanceInformation: FC = () => {
	const balance = 12345789
	const fixedBalance = balance.toLocaleString()

	const progressBar: IProgressBar = {
		bgcolor: '#6160DC',
		completed: 53
	}

	const hiddenCardNumber = '•••• •••• ••••' + card.number.slice(14, 19)

	return (
		<div className={'balance-card'}>
			<h3 className={'font-normal text-1xl text-[#8E8EA1]'}>
				My Balance
			</h3>
			<p className={'text-3xl font-bold mt-1'}>{`$ ${fixedBalance}`}</p>

			<Progressbar
				bgcolor={progressBar.bgcolor}
				completed={progressBar.completed}
			/>

			<div className={'flex items-center gap-[46px] my-11'}>
				<CardInfoItem title={'Card Holder'} value={card.name} />
				<CardInfoItem title={'Valid Thru'} value={card.expireDate} />

				<p className={'text-1.5xl font-bold'}>{hiddenCardNumber}</p>
			</div>

			<div
				className={
					'flex flex-wrap items-center justify-between grid grid-cols-2 gap-y-5 gap-x-4'
				}
			>
				{stats.map(item => (
					<BalanceStats
						title={item.title}
						currentNum={item.currentNum}
						maxNum={item.maxNum}
						percents={item.percents}
						color={item.color}
						key={item.id}
					/>
				))}
			</div>
		</div>
	)
}
export default BalanceInformation
