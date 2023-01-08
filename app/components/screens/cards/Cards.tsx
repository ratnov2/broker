import { FC } from 'react'

import Slider from '@/ui/slider/Slider'

import style from './Cards.module.scss'
import AddNewCard from './left-card/add-new-card/AddNewCard'
import Operations from './right-card/card-actions/CardActions'
import Description from './right-card/description/Description'
import { useCardsQuery } from './useCardsQuery'
import { useInitializeSliderCard } from './useInitializeSliderCards'
import LimitCard from './left-card/limit-card/LimitCard'

const Cards: FC = () => {
	const { newCard, userCards } = useCardsQuery()

	const {
		setIndex,
		sliderPerView,
		initialIndex,
		visibleNumberCard,
		setVisibleNumberCard,
		currentCard
	} = useInitializeSliderCard(userCards.data)

	if (userCards.isLoading) return <span>Loading</span>

	return (
		<>
			<h1 className={style.head}>Cards</h1>
			{userCards.data?.length ? (
				<>
					<div className={style.cardList}>
						<div className={style.leftCardList}>
							{
								<Slider
									userCards={userCards.data}
									setIndex={setIndex}
									sliderPerView={sliderPerView}
									initialIndex={initialIndex}
									visibleNumberCard={visibleNumberCard}
									setVisibleNumberCard={setVisibleNumberCard}
								/>
							}
							<div className={style.bottomPlace}>
								<LimitCard/>
								<div>
									<AddNewCard createCard={newCard} />
								</div>
							</div>
						</div>
						<div className={style.rightCardList}>
							{currentCard && (
								<>
									<Operations accountNumber={currentCard.accountNumber} />
									<Description
										userCard={currentCard}
										visibleNumberCard={visibleNumberCard}
									/>
								</>
							)}
						</div>
					</div>
				</>
			) : (
				<div>
					<h3>You have not a card</h3>
					<AddNewCard createCard={newCard} />
				</div>
			)}
		</>
	)
}

export default Cards
