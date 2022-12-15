import { FC } from 'react'

import Pagination from '@/ui/pagination/Pagination'

import styles from './Transfer.module.scss'
import TransferItem from './TransferItem'
import { ITransfer } from './transfer.interface'

const TransferHistory: FC<{ transfers: ITransfer[] }> = ({ transfers }) => {
	return (
		<div className={styles.transferHistory}>
			<h2>Transfer History</h2>

			{transfers.length ? (
				<>
					{transfers.map(transfer => (
						<TransferItem key={transfer.id} transfer={transfer} />
					))}
					<Pagination />
				</>
			) : (
				<div className='h-[601px] flex items-center justify-center'>
					Transfer history is empty!
				</div>
			)}
		</div>
	)
}

export default TransferHistory
