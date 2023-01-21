import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState
} from 'react'

import Loader from '@/ui/loader/Loader'
import Pagination from '@/ui/pagination/Pagination'

import styles from './Transfer.module.scss'
import TransferItem from './TransferItem'
import { ITransfers } from '@/shared/types/transaction.types'

interface ITransferHistoryProps {
	isLoading: boolean
	currentPage: number
	setCurrentPage: Dispatch<SetStateAction<number>>
	transfers?: ITransfers
}

const TransferHistory: FC<ITransferHistoryProps> = ({
	isLoading,
	currentPage,
	setCurrentPage,
	transfers
}) => {
	const [itemsLimit, setItemsLimit] = useState<number | null>(null)
	useEffect(() => {
		if (!itemsLimit && transfers?.length) {
			setItemsLimit(transfers.length)
		}

		if (itemsLimit !== transfers?.length && transfers?.length) {
			setItemsLimit(transfers?.length)
		}
	}, [transfers])

	return (
		<div className={styles.transferHistory}>
			<h2>Transfer History</h2>

			{isLoading ? (
				<Loader />
			) : transfers?.length ? (
				<div className='h-[520px]'>
					{transfers.transactions.map(transaction => (
						<TransferItem key={transaction.id} transfer={transaction} />
					))}
				</div>
			) : (
				<div className='h-[520px] flex font-bold text-2xl items-center justify-center'>
					Transfer history is empty!
				</div>
			)}

			{itemsLimit && (
				<Pagination
					maxItems={itemsLimit}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					itemsPerPage={5}
				/>
			)}
		</div>
	)
}

export default TransferHistory
