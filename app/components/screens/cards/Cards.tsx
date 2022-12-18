import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { CgAdd } from 'react-icons/cg'

import Layout from '@/layout/Layout'

import Slider from '@/ui/slider/Slider'

import { sliderInitialIdx } from '@/utils/slider/slider-initial-idx'
import { setSliderPerView } from '@/utils/slider/slider-per-view'

import { CardDataTimes } from './CardsTimerData'
import LimitCard from './LeftCard/LimitCard/LimitCard'
import Operations from './RightCard/CardActions/CardActions'
import Description from './RightCard/Description/Description'
import style from './card.module.scss'

const Cards: FC = () => {
	const sliderPerView = setSliderPerView(CardDataTimes.length)
	const initialIdx = sliderInitialIdx(setSliderPerView(sliderPerView))

	const [data, setData] = useState(CardDataTimes)
	const [idx, setIdx] = useState(initialIdx)
	const [currentCard, setCurrentCard] = useState(data[idx])
	const [visibleNumberCard, setVisibleNumberCard] = useState(false) //later

	useEffect(() => {
		setCurrentCard(data[idx])
	}, [idx])
	useEffect(() => {
		console.log(visibleNumberCard)
	}, [visibleNumberCard])

	/// Side Effects- useHooks

	return (
		<Layout title='Dashboard'>
			<h1 className={style.head}>Cards</h1>
			<div className={style.cardList}>
				<div className={style.leftCardList}>
					<Slider
						data={data}
						currentCard={currentCard}
						idx={idx}
						setIdx={setIdx}
						sliderPerView={sliderPerView}
						initialIdx={initialIdx}
						visibleNumberCard={visibleNumberCard}
						setVisibleNumberCard={setVisibleNumberCard}
					/>
					<div className={style.bottomPlace}>
						<LimitCard />
						<div>
							<Link href={'/'} className={style.newCard}>
								<CgAdd />
								<span>Add new card</span>
							</Link>
						</div>
					</div>
				</div>
				<div className={style.rightCardList}>
					<Operations />
					<Description
						type={currentCard.type}
						number={currentCard.number}
						valid={currentCard.valid}
						name={currentCard.name}
						bank={currentCard.bank}
						visibleNumberCard={visibleNumberCard}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Cards
