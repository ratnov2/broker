import { Dispatch, FC, SetStateAction, useState } from 'react'

import styles from './Pagination.module.scss'
import PaginationArrow from './PaginationArrow/PaginationArrow'
import PaginationButton from './PaginationButton/PaginationButton'

interface IPaginationProps {
	itemsLimit: number | undefined
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
}

const Pagination: FC<IPaginationProps> = ({
	currentPage,
	setCurrentPage,
	itemsLimit
}) => {
	const onChangePage = (id: number) => {
		setCurrentPage(id)
	}

	return (
		<div className={styles.pagination}>
			{itemsLimit && (
				<>
					<p>
						Showing{' '}
						<span>{`${5 * currentPage + 1} - ${5 * currentPage + 5}`}</span>{' '}
						from <span>{itemsLimit ? itemsLimit : '...'}</span> data
					</p>
					<div>
						<PaginationArrow
							itemsLimit={itemsLimit}
							type='prev'
							currentPage={currentPage}
							onChangePage={onChangePage}
						/>
						{itemsLimit &&
							[...new Array(Math.ceil(itemsLimit / 5))].map((item, index) => (
								<PaginationButton
									key={index}
									id={index}
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
