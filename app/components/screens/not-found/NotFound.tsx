import { FC } from 'react'

import Layout from '@/layout/Layout'

const NotFound: FC = () => {
	return (
		<Layout title='404'>
			<div className='h-full flex flex-col items-center justify-center'>
				<div className='text-7xl font-bold text-red'>404 | Not Found</div>
			</div>
		</Layout>
	)
}

export default NotFound
