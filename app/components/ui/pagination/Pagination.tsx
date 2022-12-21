import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import styles from './Pagination.module.scss'
import PaginationArrow from './pagination-arrow/PaginationArrow'
import PaginationButton from './pagination-button/PaginationButton'

interface IPaginationProps {
	maxItems: number
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	itemsPerPage: number
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

	const onChangePage = (id: number) => {
		setCurrentPage(id)
	}

	return (
		<div className={styles.pagination} style={{}}>
			{maxItems && (
				<>
					<p>
						Showing
						<span>
							{' '}
							{showingMin} - {showingMax}
						</span>{' '}
						from <span>{maxItems}</span> data
					</p>
					<div>
						<PaginationArrow
							itemsLimit={maxItems}
							type='prev'
							currentPage={currentPage}
							onChangePage={onChangePage}
							itemsPerPage={itemsPerPage}
						/>
						{getPageNumbers(currentPage).map(number => (
							<PaginationButton
								key={number}
								id={number}
								currentPage={currentPage}
								onChangePage={onChangePage}
							/>
						))}
						<PaginationArrow
							itemsLimit={maxItems}
							type='next'
							currentPage={currentPage}
							onChangePage={onChangePage}
							itemsPerPage={itemsPerPage}
						/>
					</div>
				</>
			)}
		</div>
	)
}

export default Pagination
