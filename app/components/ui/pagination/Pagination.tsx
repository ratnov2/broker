import { Dispatch, FC, SetStateAction } from 'react'

import { getPagination } from '@/utils/get-pagination'

import styles from './Pagination.module.scss'
import PaginationArrow from './pagination-arrow/PaginationArrow'
import PaginationButton from './pagination-button/PaginationButton'

interface IPaginationProps {
	maxItems: number
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination: FC<IPaginationProps> = ({
	currentPage,
	setCurrentPage,
	maxItems,
	itemsPerPage
}) => {
	const maxPagesCount = Math.ceil(maxItems / itemsPerPage)
	const maxShownPages = 3

	const getPageNumbers = (currentPage: number) => {
		const pageNumbers = []
		for (let i = 1; i <= maxPagesCount; i++) {
			pageNumbers.push(i)
		}

		return currentPage === maxPagesCount
			? pageNumbers.slice(currentPage - maxShownPages, currentPage + 1)
			: currentPage > 1
			? pageNumbers.slice(
					currentPage - (maxShownPages - 1),
					currentPage + 1
			  )
			: pageNumbers.slice(0, currentPage + (maxShownPages - 1))
	}

	const showingMax =
		currentPage * itemsPerPage > maxItems
			? maxItems
			: currentPage * itemsPerPage < itemsPerPage
			? itemsPerPage
			: currentPage * itemsPerPage

	const showingMin = currentPage * itemsPerPage - (itemsPerPage - 1)
	const { paginationButtons, minItemNumberPerPage, maxItemNumberPerPage } =
		getPagination(itemsLimit, currentPage, itemsPerPage)

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
					paginationButtons.map(item => (
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
