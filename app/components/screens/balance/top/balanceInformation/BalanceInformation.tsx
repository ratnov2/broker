import { FC } from 'react'

import { card, stats } from '@/screens/balance/top/balance.data'
import BalanceStats from '@/screens/balance/top/balanceInformation/BalanceStats'
import CardInfoItem from '@/screens/balance/top/balanceInformation/CardInfoItem'
import Progressbar from '@/screens/balance/top/balanceInformation/Progressbar'
import { IProgressBar } from '@/screens/balance/top/interfaces/balanceStats.interface'

const BalanceInformation: FC = () => {
	const balance = 12345789
	const fixedBalance = balance.toLocaleString()

	const progressBar: IProgressBar = {
		bgColor: '#6160DC',
		percents: 53
	}

	const hiddenCardNumber = '•••• •••• ••••' + card.number.slice(14, 19)

	return (
		<div className={'balance-card'}>
			<h3 className={'font-normal text-1xl text-[#8E8EA1]'}>
				My Balance
			</h3>
			<p className={'text-3xl font-bold mt-1'}>{`$ ${fixedBalance}`}</p>

			<Progressbar
				bgColor={progressBar.bgColor}
				percents={progressBar.percents}
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
