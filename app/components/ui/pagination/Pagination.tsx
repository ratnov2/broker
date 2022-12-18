import { FC, useState } from 'react';



import styles from './Pagination.module.scss';
import PaginationArrow from './PaginationArrow/PaginationArrow';
import PaginationButton from './PaginationButton/PaginationButton';


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
	//const [currentPage, setCurrentPage] = useState<number>(0)
	// const onChangePage = (id: number) => {
	// 	setCurrentPage(id)
	// }

	return (
		<div className={styles.pagination}>
			<p>
				Showing <span>1-5</span> from <span>{totalItems}</span> invoices
			</p>
			<div>
				<PaginationArrow
					type='prev'
					currentPage={currentPage}
					onChangePage={onChangePage}
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
				/>
			</div>
		</div>
	)
}

export default Pagination