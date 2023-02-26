import { log } from 'console'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/ui/button/Button'

import logo2 from '@/assets/images/logo-2.png'
import { useGetProfile } from '@/hooks/useGetProfile'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import style from './Sidebar.module.scss'

const Sidebar = () => {
	const user = useGetProfile()
	console.log(user.data?.data);
	
	return (
		<div className={style.sidebar}>
			<div className={style.navigate}>
				<Link href='/'>
					<div className={style.logo}>
						<Image width={176} height={197} alt='logo' src={logo2} />
						<span>Unique Option Trading Strategy by Mark</span>
					</div>
				</Link>
				{user.isLoading ? (
					<SkeletonLoader count={1} width={200} height={40} className='h-5 w-3/5' />
				) : user.data?.data ? (
					<div className='ml-5'>
					<Link href='account'>
						<div>
							<Button className='bg-[rgb(205,0,28)] text-white px-5 py-2 text-lg font-light transition-all duration-200 hover:bg-[rgb(155,0,0)]'>
								Personal Account
							</Button>
						</div>
					</Link>
					</div>
				) : (
					<div className='flex ml-5'>
						<Link href='login'>
							<Button className='mr-4 white text-red border-[1px] px-5 py-1 text-lg font-light transition-all duration-200 hover:border-[rgb(205,0,28)] hover:text-[rgb(205,0,28)]'>
								Log In
							</Button>
						</Link>
						<Link href='register'>
							<Button className='bg-[rgb(205,0,28)] border-[1px] border-[rgb(205,0,28)] text-white px-5 py-1 text-lg font-light transition-all duration-200 hover:bg-[rgb(155,0,0)]'>
								Create Account
							</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}
export default Sidebar
