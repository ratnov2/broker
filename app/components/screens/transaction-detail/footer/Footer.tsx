import { FC } from 'react'

import styles from '@/screens/transaction-detail/footer/Footer.module.scss'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'
import { ICol } from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetailFooter: FC<ITransactionDetail> = props => {
	const column: ICol[] = [
		{
			name: 'Subtotal',
			desc: '$'+String(props.subtotal)
		},
		{
			name: 'Tax',
			desc: String(props.tax)+'%'
		},
		{
			name: 'Total',
			desc: '$'+String(props.total)
		}
	]

	return (
		<>
			<div className='border border-indigo-600 mt-5 text-[#8E8EA1]'></div>

			<div className='items-start justify-between border-b  border-light-gray  text-sm text-[#8E8EA1] mt-3 p-1'>
				{column.map(column => (
					<div className='flex justify-between font-bold'>
						<div className={styles.Margin}/>
                        <div className={styles[column.name]}>{column.name}</div>
						<div className={styles[column.name+'Desc']}>{column.desc}</div>
					</div>
				))}
			</div>

			<div className={styles.Note}>
				<span className='mb-2'>Note:</span>
				<p className='text-left text-black'>{props.note}</p>
			</div>
		</>
	)
}

export default TransactionDetailFooter
