import {
	Dispatch,
	FC,
	MouseEvent,
	MouseEventHandler,
	SetStateAction,
	useEffect,
	useState
} from 'react'

import Pagination from '@/ui/pagination/Pagination'

import styles from './SavingsTable.module.scss'
import SavingsRow from '@/screens/savings/row/SavingsRow'
import { ISavingsData } from '@/screens/savings/savings.interface'
import { backgrounds } from '@/screens/savings/table/savingsTable.data'

let backGroundFlag = true

interface ISavingsTable {
	currentPage: number
	savingsData: ISavingsData[]
	setCurrentPage: Dispatch<SetStateAction<number>>
	deleteItem: (
		event: MouseEventHandler<HTMLTableDataCellElement>,
		index: number
	) => void
}

const SavingsTable: FC<ISavingsTable> = ({
	currentPage,
	setCurrentPage,
	savingsData,
	deleteItem
}) => {
	function deleteRow(event: any, index: number) {
		deleteItem(event, index)
	}

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
								{savingsData.map((saving, index) => {
									backGroundFlag = !backGroundFlag
									const backgroundColor = backgrounds[+backGroundFlag]

									return (
										<SavingsRow
											saving={saving}
											id={index}
											key={index}
											deleteItem={e => deleteRow(e, index)}
										/>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
				{savingsData && (
					<Pagination
						currentPage={1}
						setCurrentPage={setCurrentPage}
						maxItems={savingsData.length}
						itemsPerPage={5}
					/>
				)}
			</div>
		</div>
	)
}

export default SavingsTable
