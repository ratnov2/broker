import { FC } from 'react'

import { useCards } from '@/hooks/bankAccount/useCards'
import { useUserProfile } from '@/hooks/user/useUserProfile'

import { stats } from '@/screens/balance/top/balance.data'
import BalanceStats from '@/screens/balance/top/balanceInformation/BalanceStats'
import CardInfoItem from '@/screens/balance/top/balanceInformation/CardInfoItem'
import Progressbar from '@/screens/balance/top/balanceInformation/Progressbar'
import { ICard } from '@/screens/balance/top/interfaces/balance-top.interface'
import { IUserProfile } from '@/services/user/user-profile.interface'

const BalanceInformation: FC = () => {
	const { data: userCardsData } = useCards()
	const { data: userProfileData } = useUserProfile()

	const primaryCard = userCardsData?.filter(
		cardData => cardData.type === 'primary'
	)

	let cardData = {} as ICard
	let fixedBalance = ''
	let hiddenCardNumber = ''
	let expireDate = ''

	if (primaryCard?.length) {
		cardData = primaryCard[0]
		fixedBalance = cardData.balance.toLocaleString()
		hiddenCardNumber = '•••• •••• •••• ' + cardData.number.slice(12, 16)

		if (cardData.expireDate.length !== 5) {
			expireDate = `0${cardData.expireDate}`
		} else {
			expireDate = cardData.expireDate
		}
	}

	let userProfile = {} as IUserProfile

	if (userProfileData) {
		userProfile = userProfileData
	}

	return (
		<div className={'balance-card'}>
			<h3 className={'font-normal text-1xl text-[#8E8EA1]'}>My Balance</h3>
			<p className={'text-3xl font-bold mt-1'}>{`$ ${fixedBalance}`}</p>

			<Progressbar />

			<div className={'flex items-center gap-[46px] my-11'}>
				<CardInfoItem title={'Card Holder'} value={userProfile.name} />
				<CardInfoItem title={'Valid Thru'} value={expireDate} />

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
