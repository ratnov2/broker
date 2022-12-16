import { FC, useState } from 'react'

import Layout from '@/layout/Layout'

import TransferHistory from './transfer-history/TransferHistory'
import { useBalance } from './useBalance'

const Balance: FC = () => {
	const [currentPage, setCurrentPage] = useState(0)
	const { isLoading, transfers } = useBalance(currentPage)

	return (
		<Layout title='Balance'>
			<div className='h-screen w-full'>
				<div className='flex space-x-10'>
					<TransferHistory
						isLoading={isLoading}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						transfers={transfers}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Balance
