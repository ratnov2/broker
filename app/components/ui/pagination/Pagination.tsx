import { FC, useState } from 'react'

import styles from './Pagination.module.scss'
import PaginationArrow from './PaginationArrow/PaginationArrow'
import PaginationButton from './PaginationButton/PaginationButton'

const Pagination: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(0)
	const onChangePage = (id: number) => {
		setCurrentPage(id)
	}

	return (
		<div className={styles.pagination}>
			<p>
				Showing <span>1-5</span> from <span>100</span> data
			</p>
			<div>
				<PaginationArrow
					type='prev'
					currentPage={currentPage}
					onChangePage={onChangePage}
				/>
				{[...new Array(3)].map((item, index) => (
					<PaginationButton
						key={index}
						id={index}
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
