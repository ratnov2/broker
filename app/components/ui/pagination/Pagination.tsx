import { Dispatch, FC, SetStateAction } from 'react'

import styles from './Pagination.module.scss'
import PaginationArrow from './PaginationArrow/PaginationArrow'
import PaginationButton from './PaginationButton/PaginationButton'

interface IPaginationProps {
	itemsLimit?: number
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination: FC<IPaginationProps> = ({
	currentPage,
	setCurrentPage,
	itemsLimit
}) => {
	const getPages = (currentPage: number) => {
		let array = []
		for (let i = 0; i < Math.ceil((itemsLimit || 0) / 5); i++) {
			array.push(i)
		}

		return currentPage + 1 === Math.ceil((itemsLimit || 0) / 5)
			? array.slice(currentPage - 2, currentPage + 1)
			: currentPage > 0
			? array.slice(currentPage - 1, currentPage + 2)
			: array.slice(0, currentPage + 3)
	}

	const minItemNumberPerPage = 5 * currentPage + 1
	const maxItemNumberPerPage = 5 * currentPage + 5

	const onChangePage = (id: number) => {
		setCurrentPage(id)
	}

	return (
		<div className={styles.pagination}>
			{itemsLimit && (
				<>
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
							getPages(currentPage).map(item => (
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
				</>
			)}
		</div>
	)
}

export default Pagination
