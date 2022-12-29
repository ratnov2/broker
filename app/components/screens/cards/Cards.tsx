import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { CgAdd } from 'react-icons/cg'
import { useMutation, useQuery } from 'react-query'

import Layout from '@/layout/Layout'

import Slider from '@/ui/slider/Slider'
import { TypeUserCardAndStyle } from '@/ui/slider/slider.interface'

import { IUserCard } from '@/shared/types/bank-accounts.interface'

import { BackgroundColorBank } from '@/utils/background-color-bank'
import { SliderInitialIdx } from '@/utils/slider/slider-initial-index'
import { SliderPerView } from '@/utils/slider/slider-per-view'

import style from './Cards.module.scss'
import { CardDataTimes, LimitData } from './cards-timer-data'
import AddNewCard from './left-card/add-new-card/AddNewCard'
import LimitCard from './left-card/limit-card/LimitCard'
import Operations from './right-card/card-actions/CardActions'
import Description from './right-card/description/Description'
import { AuthHostData, InvoicesHostData } from '@/axios/request.data'
import { BankAccount } from '@/services/card/bank-account.service'
import { NormalizeNumberCard } from '@/utils/normalize-number-card'

const Cards: FC = () => {
	const bankAccount = useQuery('get-accounts-bank', () =>
		BankAccount.getAllBankAccounts()
	)

	const userCards = useQuery(
		'get-user-cards',
		() => BankAccount.getAllUserCards(),
		{
			select: ({ data }) =>
				data.map(el => ({
					...el,
					number:NormalizeNumberCard(el.number),
					background: BackgroundColorBank(el.bankName)
				}))
		}
	)
	const newCard = useMutation('create-card', () => BankAccount.createCard(), {
		onSuccess: () => userCards.refetch()
	})

	const [sliderPerView, setSliderPerView] = useState<number>(1)
	const [initialIndex, setInitialIndex] = useState<number>(1)

	const [index, setIndex] = useState(0)
	const [currentCard, setCurrentCard] = useState<TypeUserCardAndStyle>()
	const [visibleNumberCard, setVisibleNumberCard] = useState(false)

	useEffect(() => {
		if (userCards.data) {
			setCurrentCard(userCards.data[index])
		}
	}, [index])

	useEffect(() => {
		if (userCards.data) {
			setSliderPerView(SliderPerView(userCards.data.length))
			setInitialIndex(SliderInitialIdx(SliderPerView(userCards.data.length)))
			setCurrentCard(userCards.data[index])
		}
	}, [userCards.data])
	/// Side Effects- useHooks

	return (
		<Layout title='Cards'>
			<h1 className={style.head}>Cards</h1>
			{userCards.data ? (
				<>
					<div className={style.cardList}>
						<div className={style.leftCardList}>
							<Slider
								userCards={userCards.data}
								setIndex={setIndex}
								sliderPerView={sliderPerView}
								initialIndex={initialIndex}
								visibleNumberCard={visibleNumberCard}
								setVisibleNumberCard={setVisibleNumberCard}
							/>
							<div className={style.bottomPlace}>
								<LimitCard limit={LimitData} />
								<div>
									<AddNewCard createCard={newCard}/>
								</div>
							</div>
						</div>
						<div className={style.rightCardList}>
							{currentCard && (
								<>
									<Operations />
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
				<span>Loading</span>
			)}
		</Layout>
	)
}

export default Cards
