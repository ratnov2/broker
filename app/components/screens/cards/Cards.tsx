import { FC, useEffect, useState } from 'react'

import Slider from '@/ui/slider/Slider'
import { TypeUserCardAndStyle } from '@/ui/slider/slider.interface'

import { SliderInitialIdx } from '@/utils/slider/slider-initial-index'
import { SliderPerView } from '@/utils/slider/slider-per-view'

import style from './Cards.module.scss'
import { LimitData } from './cards-timer-data'
import AddNewCard from './left-card/add-new-card/AddNewCard'
import LimitCard from './left-card/limit-card/LimitCard'
import Operations from './right-card/card-actions/CardActions'
import Description from './right-card/description/Description'
import { useCardsQuery } from './useCardsQuery'

const Cards: FC = () => {
	const { newCard, topUp, userCards, withdrawal } = useCardsQuery()

	const [sliderPerView, setSliderPerView] = useState<number>(1)
	const [initialIndex, setInitialIndex] = useState<number>(1)

	const [index, setIndex] = useState<number>(0)
	const [currentCard, setCurrentCard] = useState<TypeUserCardAndStyle>()
	const [visibleNumberCard, setVisibleNumberCard] = useState<boolean>(false)

	useEffect(() => {
		if (userCards.data) {
			setCurrentCard(userCards.data[index])
		}
	}, [index])

	useEffect(() => {
		if (userCards.data) {
			setSliderPerView(SliderPerView(userCards.data.length))
			setInitialIndex(SliderInitialIdx(SliderPerView(userCards.data.length)))
			setCurrentCard(
				userCards.data[SliderInitialIdx(SliderPerView(userCards.data.length))]
			)
			setIndex(SliderInitialIdx(SliderPerView(userCards.data.length)))
		}
	}, [userCards.data])

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
								<LimitCard limit={LimitData} />
								<div>
									<AddNewCard createCard={newCard} />
								</div>
							</div>
						</div>
						<div className={style.rightCardList}>
							{currentCard && (
								<>
									<Operations
										topUp={topUp}
										withdrawal={withdrawal}
										accountNumber={currentCard.accountNumber}
									/>
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
