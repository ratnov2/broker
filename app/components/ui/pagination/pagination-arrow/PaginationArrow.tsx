import { FC } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

import styles from './PaginationArrow.module.scss'

interface IPageArrow {
	type: 'prev' | 'next'
	currentPage: number
	onChangePage: (id: number) => void
	itemsLimit: number
	itemsPerPage: number
}

const PaginationArrow: FC<IPageArrow> = ({
	type,
	currentPage,
	onChangePage,
	itemsLimit,
	itemsPerPage
}) => {
	return (
		<button className={styles.paginationArrow}>
			{type === 'prev' ? (
				<AiFillCaretLeft
					size={'30px'}
					onClick={() =>
						onChangePage(currentPage === 1 ? 1 : currentPage - 1)
					}
				/>
			) : (
				<AiFillCaretRight
					size={'30px'}
					onClick={() =>
						onChangePage(
							currentPage === itemsLimit / itemsPerPage
								? currentPage
								: currentPage + 1
						)
					}
				/>
			)}
		</button>
	)
}

export default PaginationArrow
