import { FC, useState } from 'react'

import Loader from '@/ui/loader/Loader'
import Pagination from '@/ui/pagination/Pagination'

import { useCards } from '@/hooks/useCards'

import styles from './CardsList.module.scss'
import CardRow from '@/screens/cards/cards-list/CardRow'

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
	const [cardsPerPage] = useState(5)
	const { isLoadingCards, userCards } = useCards(currentPage)

	return (
		<>
			<div className={styles.cardsListSection} style={{ position: 'relative' }}>
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
							<CardRow key={card.id} card={card} />
						))}
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							maxItems={userCards.length}
							itemsPerPage={cardsPerPage}
						/>
					</>
				) : (
					<div className='h-[562px] flex items-center justify-center'>
						No Cards yet
					</div>
				)}
			</div>
		</>
	)
}

export default CardList
