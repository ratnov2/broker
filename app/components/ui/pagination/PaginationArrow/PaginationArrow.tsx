import { FC } from 'react'

import styles from './PaginationArrow.module.scss'

interface IPageArrow {
	type: 'prev' | 'next'
	currentPage: number
	onChangePage: (id: number) => void
}

const PaginationArrow: FC<IPageArrow> = ({
	type,
	currentPage,
	onChangePage
}) => {
	return (
		// Проблемы с картинками
		<button className={styles.paginationArrow}>
			{type === 'prev' ? (
				<img src='/app/assets/balance/arrow-left.svg' alt='prev' />
			) : (
				<img src='/app/assets/balance/arrow-right.svg' alt='next' />
			)}
		</button>
	)
}

export default PaginationArrow
