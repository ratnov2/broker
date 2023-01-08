import { FC } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

import styles from './PaginationArrow.module.scss'

interface IPageArrow {
	itemsLimit: number
	type: 'prev' | 'next'
	currentPage: number
	onChangePage: (id: number) => void
	itemsPerPage?: number
}

const PaginationArrow: FC<IPageArrow> = ({
	itemsLimit,
	type,
	currentPage,
	onChangePage,
	itemsPerPage = 5
}) => {
	const isButtonDisabled = () =>
		(type === 'prev' && currentPage === 1) ||
		(type === 'next' && currentPage === Math.ceil(itemsLimit / itemsPerPage))

	const onClickArrow = ({
		type,
		currentPage,
		onChangePage
	}: Omit<IPageArrow, 'itemsLimit'>) => {
		type === 'prev'
			? onChangePage(currentPage - 1)
			: onChangePage(currentPage + 1)
	}

	return (
		<button
			disabled={isButtonDisabled()}
			onClick={() => onClickArrow({ type, currentPage, onChangePage })}
			className={styles.paginationArrow}
		>
			{type === 'prev' ? (
				<AiFillCaretLeft size={30} color='#8E8EA1' />
			) : (
				<AiFillCaretRight size={30} color='#8E8EA1' />
			)}
		</button>
	)
}

export default PaginationArrow
