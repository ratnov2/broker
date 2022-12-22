import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { CgAdd } from 'react-icons/cg'

import Layout from '@/layout/Layout'

import Slider from '@/ui/slider/Slider'

import { sliderInitialIdx } from '@/utils/slider/slider-initial-index'
import { setSliderPerView } from '@/utils/slider/slider-per-view'

import LimitCard from './leftCard/limitCard/LimitCard'
import Operations from './rightCard/cardActions/CardActions'
import Description from './rightCard/description/Description'
import style from './Cards.module.scss'
import { CardDataTimes, LimitData } from './cards-timer-data'

const Cards: FC = () => {
	const sliderPerView = setSliderPerView(CardDataTimes.length)
	const initialIdx = sliderInitialIdx(setSliderPerView(sliderPerView))

	const [data, setData] = useState(CardDataTimes)
	const [index, setIndex] = useState(initialIdx)
	const [currentCard, setCurrentCard] = useState(data[index])
	const [visibleNumberCard, setVisibleNumberCard] = useState(false) 

	useEffect(() => {
		setCurrentCard(data[index])
	}, [index])

	/// Side Effects- useHooks

	return (
		<Layout title='Cards'>
			<h1 className={style.head}>Cards</h1>
			<div className={style.cardList}>
				<div className={style.leftCardList}>
					<Slider
						data={data}
						setIndex={setIndex}
						sliderPerView={sliderPerView}
						initialIdx={initialIdx}
						visibleNumberCard={visibleNumberCard}
						setVisibleNumberCard={setVisibleNumberCard}
					/>
					<div className={style.bottomPlace}>
						<LimitCard limit={LimitData}/>
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
