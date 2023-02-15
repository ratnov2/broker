import { useGetProfile } from '@/hooks/useGetProfile'
import Layout from '@/layout/Layout'
import { useRouter } from 'next/router'



const Courses = () => {
	const router = useRouter()
	const user = useGetProfile()
	if(user.isLoading) return null
	if(user.data?.data?.isPayment) {
		return (
		<Layout title='Courses'>
			<div className='text-center'>All the Courses.</div>
      <div className='text-center'>Only Payment</div>
		</Layout>
	)}else{
		router.replace('/404')
		return null
	}
}

Courses.isPayment = true

export default Courses
