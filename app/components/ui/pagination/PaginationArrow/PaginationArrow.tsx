import { FC } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import styles from './PaginationArrow.module.scss'

interface IPageArrow {
	itemsLimit: number
	type: 'prev' | 'next'
	currentPage: number
	onChangePage: (id: number) => void
}

const PaginationArrow: FC<IPageArrow> = ({
	itemsLimit,
	type,
	currentPage,
	onChangePage
}) => {
	const isButtonDisabled = () =>
		(type === 'prev' && currentPage === 0) ||
		(type === 'next' && currentPage === Math.floor(itemsLimit / 5))

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
				<AiOutlineArrowLeft size={30} />
			) : (
				<AiOutlineArrowRight size={30} />
			)}
		</button>
	)
}

export default PaginationArrow
