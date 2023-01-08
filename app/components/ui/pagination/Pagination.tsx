import { Dispatch, FC, SetStateAction } from 'react'

import { getPagination } from '@/utils/get-pagination'

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
