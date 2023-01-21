import { FC } from 'react'

import { ICard } from '@/shared/types/card.types'

import Actions from './actions/Actions'
import CardStatus from '@/screens/cards/cards-list/CardStatus'
import { IUserProfile } from '@/services/user/user-profile.interface'

type CardRowPropsType = {
	card: ICard
	userProfile?: IUserProfile
}

const CardRow: FC<CardRowPropsType> = ({ card, userProfile }) => {
	return (
		<div
			className={
				'flex items-center py-[16px] pl-[32px] h-112px border-y odd:border-0 border-black/10'
			}
		>
			<img
				className={'w-[120px] h-[80px] mr-[24px]'}
				src='/images/card.png'
				alt='card'
			/>
			<div className={'my-auto w-[100px]'}>
				<span className={'block text-sm text-gray'}>Card Type</span>
				<span className={'block text-lg font-semibold'}>{card.type}</span>
			</div>
			<div className={'my-auto ml-[110px] w-[200px]'}>
				<span className={'block text-sm text-gray'}>Bank Name</span>
				<span className={'block text-lg font-semibold'}>{card.bankName}</span>
			</div>
			<div className={'my-auto ml-[20px] w-[180px]'}>
				<span className={'block text-sm text-gray'}>Name</span>
				<span className={'block text-lg font-semibold'}>
					{userProfile?.name}
				</span>
			</div>
			<div className={'my-auto'}>
				<span className={'block text-sm text-gray'}>Card Number</span>
				<span className={'block text-lg font-semibold'}>
					{'•••• •••• •••• ' + card.number.slice(12, 16)}
				</span>
			</div>
			<div className={'my-auto ml-[105px] mr-[142px]'}>
				<span className={'block text-sm text-gray'}>Valid Thru</span>
				<span className={'block text-lg font-semibold'}>
					{card.expireDate.length === 4
						? '0' + card.expireDate
						: card.expireDate}
				</span>
			</div>
			<CardStatus active={true} />
			<Actions />
		</div>
	)
}

export default CardRow
