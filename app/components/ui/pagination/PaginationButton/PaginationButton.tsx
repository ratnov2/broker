import cn from 'clsx'
import { FC } from 'react'

import styles from './PaginateButton.module.scss'

interface IPaginationButton {
	id: number
	currentPage: number
	onChangePage: (id: number) => void
}

const PaginationButton: FC<IPaginationButton> = ({
	id,
	currentPage,
	onChangePage
}) => {
	return (
		<button
			onClick={() => onChangePage(id)}
			className={cn(styles.paginateButton, currentPage === id && styles.active)}
		>
			{id}
		</button>
	)
}

export default PaginationButton
