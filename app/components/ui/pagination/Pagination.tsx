import { FC, useEffect } from 'react';



import styles from './Pagination.module.scss';
import PaginationArrow from './pagination-arrow/PaginationArrow';
import PaginationButton from './pagination-button/PaginationButton';


interface IPagination {
	itemsPerPage: number
	totalItems: number
	currentPage: number
	onChangePage: (id: number) => void
}
const Pagination: FC<IPagination> = ({
	itemsPerPage,
	totalItems,
	currentPage,
	onChangePage
}) => {
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i)
	}

	const showingMax =
		currentPage * itemsPerPage > totalItems
			? totalItems
			: currentPage * itemsPerPage < itemsPerPage
			? itemsPerPage
			: currentPage * itemsPerPage

	const showingMin = currentPage * itemsPerPage - (itemsPerPage - 1) //1.6.11.16

	
	return (
		<div className={styles.pagination}>
			<p>
				Showing{' '}
				<span>
					{showingMin}-{showingMax}
				</span>{' '}
				from <span>{totalItems}</span> invoices
			</p>
			<div>
				<PaginationArrow
					type='prev'
					currentPage={currentPage}
					onChangePage={onChangePage}
					totalPages={pageNumbers.length}
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
					type='next'
					currentPage={currentPage}
					onChangePage={onChangePage}
					totalPages={pageNumbers.length}
				/>
			</div>
		</div>
	)
}

export default Pagination