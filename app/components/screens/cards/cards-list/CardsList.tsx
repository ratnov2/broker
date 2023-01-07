import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import CardRow from '@/screens/cards/cards-list/CardRow'
import Pagination from '@/screens/cards/cards-list/Pagination'
import { useCards } from '@/hooks/useCards'
import Loader from '@/ui/loader/Loader'

type TypeCards = {
	type: 'Primary' | 'Secondary'
	bankName: string
	holderName: string
	cardNumber: string
	validity: string
	active: boolean
}

const cards: TypeCards[] = [
	{
		type: 'Primary',
		bankName: 'Bank ABC',
		holderName: 'Rara Avis',
		cardNumber: '•••• •••• •••• 1235',
		validity: '03/21',
		active: true
	},
	{
		type: 'Secondary',
		bankName: 'Bank DEF',
		holderName: 'Rara Avis',
		cardNumber: '•••• •••• •••• 1236',
		validity: '03/21',
		active: false
	},
	{
		type: 'Secondary',
		bankName: 'Bank HIJ',
		holderName: 'Rara Avis',
		cardNumber: '•••• •••• •••• 1237',
		validity: '03/21',
		active: true
	},
	{
		type: 'Primary',
		bankName: 'Bank ABC',
		holderName: 'Rara Avis',
		cardNumber: '•••• •••• •••• 1238',
		validity: '03/21',
		active: true
	},
	{
		type: 'Secondary',
		bankName: 'Bank DEF',
		holderName: 'Rara Avis',
		cardNumber: '•••• •••• •••• 1239',
		validity: '03/21',
		active: false
	},
	{
		type: 'Secondary',
		bankName: 'Bank HIJ',
		holderName: 'Rara Avis',
		cardNumber: '•••• •••• •••• 1224',
		validity: '03/21',
		active: true
	}
]

const CardList: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const { isLoadingCards, userCards } = useCards(currentPage)

	return (
		<div className={'bg-white h-[562px] w-full pt-8 rounded-[40px] mt-8'}>
			<h1
				className={
					"font-['Inter'] font-bold text-1.5xl text-black mb-[44px] pl-8"
				}
			>
				Card List
			</h1>
			{isLoadingCards ? (
				<Loader />
			) : userCards?.length ? (
				<>
					{userCards.map(card => (
						<CardRow card={card} />
					))}
					<Pagination
						length={cards.length}
						activePage={currentPage}
						setActivePage={setCurrentPage}
						/>
					</>
				): (
				<div className='h-[562px] flex items-center justify-center'>
					No Cards yet
				</div>
				)}
		</div>
	)
}

export default CardList
