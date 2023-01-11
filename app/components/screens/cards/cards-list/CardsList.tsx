import { FC, useState } from 'react'

import Loader from '@/ui/loader/Loader'
import Pagination from '@/ui/pagination/Pagination'

import { useCards } from '@/hooks/useCards'
import { useUserProfile } from '@/hooks/useUserProfile'

import styles from './CardsList.module.scss'
import CardRow from '@/screens/cards/cards-list/CardRow'

const CardList: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [cardsPerPage] = useState(5)
	const { isLoadingCards, userCards } = useCards(currentPage)
	const { data } = useUserProfile()

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
							<CardRow key={card.id} card={card} userProfile={data} />
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
