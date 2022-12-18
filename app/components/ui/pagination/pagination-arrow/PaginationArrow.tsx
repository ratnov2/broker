import { FC } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';



import styles from './PaginationArrow.module.scss';


interface IPageArrow {
	type: 'prev' | 'next'
	currentPage: number
	onChangePage: (id: number) => void
	totalPages: number
}

const PaginationArrow: FC<IPageArrow> = ({
	type,
	currentPage,
	onChangePage,
	totalPages
}) => {
	console.log(totalPages)
	return (
		<button className={styles.paginationArrow}>
			{type === 'prev' ? (
				<AiFillCaretLeft
					onClick={() =>
						onChangePage(currentPage === 1 ? 1 : currentPage - 1)
					}
				/>
			) : (
				<AiFillCaretRight
					onClick={() =>
						onChangePage(
							currentPage === totalPages
								? totalPages
								: currentPage + 1
						)
					}
				/>
			)}
		</button>
	)
}

export default PaginationArrow