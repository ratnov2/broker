import { Dispatch, FC, SetStateAction } from 'react'

import styles from './Pagination.module.scss'
import PaginationArrow from './PaginationArrow/PaginationArrow'
import PaginationButton from './PaginationButton/PaginationButton'

interface IPaginationProps {
	setCurrentPage: Dispatch<SetStateAction<number>>
	currentPage: number
	itemsLimit: number
	itemsPerPage?: number
}

const Pagination: FC<IPaginationProps> = ({
	currentPage,
	setCurrentPage,
	itemsLimit,
	itemsPerPage = 5
}) => {
	const getPaginationButtons = (currentPage: number) => {
		const numberOfPages = Math.ceil((itemsLimit || 0) / itemsPerPage)

		const array = []
		for (let i = 1; i <= numberOfPages; i++) {
			array.push(i)
		}

		return currentPage === numberOfPages
			? array.slice(currentPage - 3, currentPage)
			: currentPage === 1
			? array.slice(0, currentPage + 2)
			: array.slice(currentPage - 2, currentPage + 1)
	}

	const minItemNumberPerPage = itemsPerPage * (currentPage - 1) + 1
	const maxItemNumberPerPage = itemsPerPage * currentPage

	const onChangePage = (id: number) => {
		setCurrentPage(id)
	}

	return (
		<div className={styles.pagination}>
			<p>
				Showing
				<span>{` ${minItemNumberPerPage} - ${maxItemNumberPerPage} `}</span>
				from <span>{itemsLimit}</span> data
			</p>
			<div>
				<PaginationArrow
					itemsLimit={itemsLimit}
					type='prev'
					currentPage={currentPage}
					onChangePage={onChangePage}
				/>
				{itemsLimit &&
					getPaginationButtons(currentPage).map(item => (
						<PaginationButton
							key={item}
							id={item}
							currentPage={currentPage}
							onChangePage={onChangePage}
						/>
					))}
				<PaginationArrow
					itemsLimit={itemsLimit}
					type='next'
					currentPage={currentPage}
					onChangePage={onChangePage}
				/>
			</div>
		</div>
	)
}

export default Pagination
