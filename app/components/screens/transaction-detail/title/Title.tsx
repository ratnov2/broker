import { FC } from 'react'

import DownloadAction from '@/screens/transaction-detail/title/download/DownloadAction'
import PrintAction from '@/screens/transaction-detail/title/print/Print'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'

const Title: FC<ITransactionDetail> = ({ project }) => {
	return (
		<div className='flex justify-between items-center mb-4 flex-wrap'>
			<div>
				<div className='flex  items-start'>
					<span className='text-sm text-[#8E8EA1]'>Project name</span>
				</div>
				<h1 className='text-top text-4xl font-bold text-black'>
					{project}
				</h1>
			</div>
			<div className='flex justify-between mb-4'>
				<PrintAction />
				<DownloadAction />
			</div>
		</div>
	)
}

export default Title
