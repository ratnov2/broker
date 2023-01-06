import { FC } from 'react'

import { useUserCards } from '@/hooks/bank-account/useUserCards'

import { fakeCardData } from './card.data'
import { IUserCard } from './card.interface'
import styles from './card.module.scss'

const Card: FC = () => {
	const { data: userCardsData } = useUserCards()
	const primaryCard = userCardsData?.filter(
		cardData => cardData.type === 'primary'
	)

	let cardData = {} as IUserCard
	if (primaryCard?.length) {
		cardData = primaryCard[0]
	} else {
		cardData = {
			id: fakeCardData.id,
			number: fakeCardData.cardNumber,
			type: 'primary',
			bankName: fakeCardData.cardHolder,
			balance: fakeCardData.balance
		}
	}

	return (
		<div>
			<section key={cardData.id} className={styles.card__container}>
				<h1 className={styles.title}>
					<span>My Balance</span>
					<p>${cardData.balance}</p>
				</h1>
				<div className={styles.number}>{cardData.number}</div>
				<div className={styles.data}>
					<div className={styles.holder}>
						<span>Card Holder</span>
						<p>{cardData.bankName}</p>
					</div>
					<div className={styles.thru}>
						<span>Valid Thru</span>
						<p>{cardData.expireDate}</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Card
