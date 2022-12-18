import { FC } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

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
		<button className={styles.paginationArrow}>
			{type === 'prev' ? (
				<AiFillCaretLeft />
			) : (
				<AiFillCaretRight />
			)}
		</button>
	)
}

export default PaginationArrow
