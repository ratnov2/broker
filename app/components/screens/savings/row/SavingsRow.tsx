import { FC, MouseEvent, MouseEventHandler, useState } from 'react'

import SavingsButton from '@/screens/savings/button/SavingsButton'
import { ISavingsData } from '@/screens/savings/savings.interface'

interface ISavingsRow {
	saving: ISavingsData
	id: number
	deleteItem: (event: MouseEvent<HTMLImageElement>, index: number) => void
}
const SavingsRow: FC<ISavingsRow> = ({ saving, id, deleteItem }) => {
	function buttonAction(event: MouseEvent<HTMLButtonElement>) {
		console.log(event)
	}

	return (
		<tr className='h-24' style={{ backgroundColor: saving.backgroundColor }}>
			<td className='px-6 py-4 whitespace-nowrap w-6 pl-8'>
				<div
					className='rounded-3xl w-8 h-8'
					style={{ backgroundColor: saving.color }}
				></div>
			</td>
			<td className='text-sm text-center text-gray-900 font-bold px-6 py-4 whitespace-nowrap '>
				{saving.name}
			</td>
			<td
				className='text-sm text-center text-gray-900 px-6 py-4 whitespace-nowrap font-medium'
				style={{ color: '#6160dc' }}
			>
				ID #{saving.id}
			</td>
			<td className='text-sm text-center text-gray-900 font-bold px-6 py-4 whitespace-nowrap'>
				{new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					currencyDisplay: 'narrowSymbol'
				}).format(saving.target)}
			</td>
			<td className='text-center'>
				<SavingsButton
					name={'topUp'}
					color={'#6160dc'}
					text={'Top up'}
					height={'40px'}
					width={'100px'}
					onButtonClick={buttonAction}
				></SavingsButton>
			</td>
			<td>
				<SavingsButton
					name={'withdraw'}
					color={'#03daf2'}
					text={'Withdraw'}
					height={'40px'}
					width={'140px'}
					onButtonClick={buttonAction}
				></SavingsButton>
			</td>
			<td className='w-20 text-center font-bold'>
				<img
					onClick={e => deleteItem(e, id)}
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
