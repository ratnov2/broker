import Layout from '@/layout/Layout'

import style from './404.module.scss'

const PageNotFound = () => {
	return (
		<>
			<Layout title='Page not found' />
			<div className='text-center'>
				<div className='text-[100px] font-bold '>404 :(</div>
				<p>Sorry</p>
				<p>Page not found</p>
			</div>
		</>
	)
}
export default PageNotFound
