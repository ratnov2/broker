import { FC, useState } from 'react'

import SavingsButton from '@/screens/savings/button/SavingsButton'
import { ISavingsData } from '@/screens/savings/savings.interface'

const SavingsRow: FC<ISavingsData> = ({
	id,
	name,
	amount,
	topUp,
	color,
	backgroundColor
}) => {
	console.log(id)
	return (
		<tr className='h-24' style={{ backgroundColor: backgroundColor }}>
			<td className='px-6 py-4 whitespace-nowrap w-6 pl-8'>
				<div
					className='rounded-3xl w-8 h-8'
					style={{ backgroundColor: color }}
				></div>
			</td>
			<td className='text-sm text-center text-gray-900 font-bold px-6 py-4 whitespace-nowrap '>
				{name}
			</td>
			<td
				className='text-sm text-center text-gray-900 px-6 py-4 whitespace-nowrap font-medium'
				style={{ color: '#6160dc' }}
			>
				ID #{id}
			</td>
			<td className='text-sm text-center text-gray-900 font-bold px-6 py-4 whitespace-nowrap'>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					currencyDisplay: 'narrowSymbol'
				}).format(amount)}
			</td>
			<td className='text-center'>
				<SavingsButton
					name={'topUp'}
					color={'#6160dc'}
					text={'Top up'}
					height={'40px'}
					width={'100px'}
					onButtonClick={''}
				></SavingsButton>
			</td>
			<td>
				<SavingsButton
					name={'withdraw'}
					color={'#03daf2'}
					text={'Withdraw'}
					height={'40px'}
					width={'140px'}
					onButtonClick={''}
				></SavingsButton>
			</td>
			<td className='w-20 text-center font-bold'>
				<img
					src='/images/trash.svg'
					width='17px'
					height='20px'
					style={{ marginLeft: '10px', marginTop: '5px' }}
				/>
			</td>
		</tr>
	)
}

export default SavingsRow
