import Image from 'next/image'
import { FC } from 'react'

import {
	IClientData,
	ITransactionDetail
} from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetailHeader0: FC<ITransactionDetail> = props => {
	const columnNames: IClientData[] = !props.recipient
		? []
		: [
				{
					avatar: true,
					styleH: 'flex w-4/12',
					description0: props.recipient.name,
					style0: 'flex text-xl font-bold text-black',
					description1: props.recipient.address,
					style1: 'flex text-sm text-grey',
					avatarPath: props.recipient.avatarPath
				},
				{
					avatar: false,
					styleH: 'flex w-2/12',
					description0: props.recipient.email,
					style0: 'flex text-sm font-bold text-black pr-2'
				},
				{
					avatar: false,
					styleH: 'flex w-2/12',
					description0: props.recipient.name,
					style0: 'flex text-sm font-bold text-black ',
					description1: props.recipient.email
				},
				{
					avatar: false,
					styleH: 'flex w-2/12',
					description0: '*****',
					style0: 'font-bold text-black'
				}
		  ]

	return (
		<>
			<div className='flex items-start justify-between text-[16px] text-gray mt-2'>
				{columnNames.map(i => (
					<div className={i.styleH}>
						<div>
							{i.avatar ? (
								<div className='flex'>
									<Image
										src={i.avatarPath || ''}
										width={80}
										height={80}
										alt=''
									/>
									<div className='ml-3'>
										<span className={i.style0}>
											{i.description0}
										</span>
										<span className={i.style1}>
											{i.description1}
										</span>
									</div>
								</div>
							) : (
								<div>
									<span className={i.style0}>
										{i.description0}
									</span>
									<span className={i.style1}>
										{i.description1}
									</span>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default TransactionDetailHeader0
