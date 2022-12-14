import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgAdd } from 'react-icons/cg'

import Layout from '@/layout/Layout'

import { CardDataTimes } from './CardsTimerData'
import LimitCard from './LeftCard/LimitCard/LimitCard'
import SliderCard from './LeftCard/SliderCard/SliderCard'
import Description from './RightCard/Description/Description'
import Operations from './RightCard/Operations/Operations'
import style from './card.module.scss'

const Cards = () => {
	const [idx, setIdx] = useState(0)
	const [currentCard, setCurrentCard] = useState(CardDataTimes[idx])

	const [data, setData] = useState(CardDataTimes)

	const next = () => {
		if (idx === data.length - 1) {
			setCurrentCard(CardDataTimes[0])
			setIdx(0)
			return
		}
		setCurrentCard(CardDataTimes[idx + 1])
		setIdx(idx + 1)
	}
	const prev = () => {
		if (idx === 0) {
			setCurrentCard(CardDataTimes[data.length - 1])
			setIdx(data.length - 1)
			return
		}
		setCurrentCard(CardDataTimes[idx - 1])
		setIdx(idx - 1)
	}
	const [hiddenNCard, setHiddenNCard] = useState(true) //later

	/// Side Effects- useHooks
	return (
		<Layout title='Dashboard'>
			<div className={style.cardList}>
				<div className={style.leftCardList}>
					<SliderCard data={data} idx={idx} current={currentCard} />
					<button onClick={prev}>Prev</button>
					<button onClick={next}>Next</button>
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
					<Description {...currentCard} />
				</div>
			</div>
		</Layout>
	)
}

export default Cards
