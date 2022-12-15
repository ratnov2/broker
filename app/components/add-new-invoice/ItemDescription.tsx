import React from 'react'

const ItemDescription = () => {
	return (
		<div>
			<h2 className='mb-11 text-xl font-bold'>Item Desription</h2>
			<table className='w-full'>
				<thead>
					<tr>
						<th className='font-normal text-gray text-xs text-left'>
							ITEM DESCRIPTION
						</th>
						<th className='font-normal text-gray text-xs text-left'>
							DURATION
						</th>
						<th className='font-normal text-gray text-xs text-left'>
							RATE
						</th>
						<th className='font-bold text-gray text-sm text-right'>
							AMOUNT
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='border-b border-[#F5F5F5] font-semibold'>
						<td className='py-4'>Design System</td>
						<td>12h</td>
						<td>75.0</td>
						<td className='text-right'>$ 900.00</td>
					</tr>
					<tr className='border-b border-[#F5F5F5] font-semibold'>
						<td className='py-4'>Design System</td>
						<td>12h</td>
						<td>75.0</td>
						<td className='text-right'>$ 900.00</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default ItemDescription
