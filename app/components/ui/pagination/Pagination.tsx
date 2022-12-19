import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import styles from './Pagination.module.scss'
import PaginationArrow from './pagination-arrow/PaginationArrow'
import PaginationButton from './pagination-button/PaginationButton'

interface IPaginationProps {
	itemsLimit?: number
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination: FC<IPaginationProps> = ({
	currentPage,
	setCurrentPage,
	itemsLimit = 0
}) => {
	const itemsPerPage = 5
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(itemsLimit / itemsPerPage); i++) {
		pageNumbers.push(i)
	}

	const showingMax =
		currentPage * itemsPerPage > (itemsLimit || 0)
			? itemsLimit
			: currentPage * itemsPerPage < itemsPerPage
			? itemsPerPage
			: currentPage * itemsPerPage

	const showingMin = currentPage * itemsPerPage - (itemsPerPage - 1)

	const onChangePage = (id: number) => {
		setCurrentPage(id)
	}

	return (
		<div className={styles.pagination}>
			{itemsLimit && (
				<>
					<p>
						Showing
						<span>
							{showingMin} - {showingMax}
						</span>
						{' '} from <span>{itemsLimit}</span> data
					</p>
					<div>
						<PaginationArrow
							itemsLimit={itemsLimit}
							type='prev'
							currentPage={currentPage}
							onChangePage={onChangePage}
							itemsPerPage={itemsPerPage}
						/>
						{pageNumbers.map(number => (
							<PaginationButton
								key={number}
								id={number}
								currentPage={currentPage}
								onChangePage={onChangePage}
							/>
						))}
						<PaginationArrow
							itemsLimit={itemsLimit}
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
