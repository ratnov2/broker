import { FC, useEffect, useState } from 'react'

import styles from './SavingsTable.module.scss'
import SavingsRow from '@/screens/savings/row/SavingsRow'
import { ISavingsData } from '@/screens/savings/savings.interface'
import { backgrounds } from '@/screens/savings/table/savingsTable.data'

let backGroundFlag = true

interface ISavingsTable {
	perPage: number
	activePage: number
	savingsData: ISavingsData[]
}

const SavingsTable: FC<ISavingsTable> = ({
	perPage,
	activePage,
	savingsData
}) => {
	return (
		<div className={styles.wrapper}>
			<div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
					<div className='flex justify-left items-center'>
						<h3 className='text-xl font-bold pl-7 pt-2 pb-5'>Savings List</h3>
					</div>
					<div className='overflow-hidden'>
						<table className='min-w-full'>
							<tbody>
								{savingsData.map(saving => {
									backGroundFlag = !backGroundFlag
									const backgroundColor = backgrounds[+backGroundFlag]

									return (
										<SavingsRow
											id={saving.id}
											name={saving.name}
											amount={saving.amount}
											topUp={saving.topUp}
											purpose={saving.purpose}
											color={saving.color}
											backgroundColor={backgroundColor}
											key={saving.id + saving.name + Math.random()}
										></SavingsRow>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SavingsTable
