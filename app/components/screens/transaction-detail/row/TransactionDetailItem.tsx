import React, { FC } from 'react'

import { ITransactionTableDetail } from '../transaction-detail.interface';

const TransactionDetailitem: FC<ITransactionTableDetail> = (props) => {

	return (
		<div className='flex items-start justify-end text-black font-bold'>
			<div className='w-[200px] mb-3' >{props.description}</div>
			<div className='w-[200px] mb-3' >{props.duration}</div>
			<div className='w-[170px] mb-3 justify-items-center'>{props.rate}</div>
			<div className='w-[90px] mb-3 justify-items-center'>${props.amount}</div>
		</div>
	)
}

export default TransactionDetailitem