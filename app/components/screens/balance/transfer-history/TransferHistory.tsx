import { Dispatch, FC, SetStateAction } from 'react'

import Loader from '@/ui/loader/Loader'
import Pagination from '@/ui/pagination/Pagination'

import styles from './Transfer.module.scss'
import TransferItem from './TransferItem'
import { ITransfer } from './transfer.interface'

interface ITransferHistoryProps {
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	transfers?: ITransfer[]
	refetchTransfers: () => void
}

const TransferHistory: FC<ITransferHistoryProps> = ({
	isLoading,
	currentPage,
	setCurrentPage,
	transfers,
	refetchTransfers
}) => {
	return (
		<div className={styles.transferHistory}>
			<h2>Transfer History</h2>

			{isLoading ? (
				<Loader />
			) : transfers?.length ? (
				<div className='h-[520px]'>
					{transfers
						.slice(5 * currentPage, 5 * currentPage + 5)
						.map(transfer => (
							<TransferItem
								key={transfer.id}
								refetchTransfers={refetchTransfers}
								transfer={transfer}
							/>
						))}
				</div>
			) : (
				<div className='h-[520px] flex font-bold text-2xl items-center justify-center'>
					Transfer history is empty!
				</div>
			)}

			<Pagination
				itemsLimit={transfers?.length}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
}

export default TransferHistory
