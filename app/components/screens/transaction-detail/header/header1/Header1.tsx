import Image from 'next/image'
import { FC } from 'react'

import {
	IClientData,
	ITransactionDetail
} from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetailHeader0: FC<ITransactionDetail> = props => {
	const columnNames: IClientData[] = [
		{
			image: true,
			styleH: 'flex w-4/12',
			description0: 'White Space inc.',
			style0: 'flex text-xl font-bold text-black',
			description1: '18 Guild Street London, EC2V 5PX United Kingdom',
			style1: 'flex text-sm text-grey'
		},
		{
			image: false,
			styleH: 'flex w-2/12',
			description0: 'whitespace@email.com',
			style0: 'flex text-sm font-bold text-black pr-2',
			description1: '+123 456 789',
			style1: 'flex text-sm font-bold text-black'
		},
		{
			image: false,
			styleH: 'flex w-2/12',
			description0: 'Samantha William',
			style0: 'flex text-sm font-bold text-black ',
			description1: 'samantha@email.com',
			style1: ''
		},
		{
			image: false,
			styleH: 'flex w-2/12',
			description0: 'United Kingdom',
			style0: 'font-bold text-black',
			description1: '',
			style1: ''
		}
	]

	return (
		<>
			<div className='flex items-start justify-between text-[16px] text-gray mt-2'>
				{columnNames.map(i => (
					<div className={i.styleH}>
						<div>
							{i.image ? (
								<div className='flex'>
									<Image
										src='/images/avatar-empty.png'
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
