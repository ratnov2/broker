import Image from 'next/image'
import Link from 'next/link'
import { createRef, useRef } from 'react'

import Button from '@/ui/button/Button'

import logo from '@/assets/images/logoBr.png'

import { useGetProfile } from '@/hooks/useGetProfile'

import style from './Sidebar.module.scss'

const Sidebar = () => {
	const user = useGetProfile()

	let ref = useRef(null)

	return (
		<div className={style.sidebar}>
			<div className={style.navigate}>
				<Link href='/'>
					<div className={style.logo}>
						<Image width={176} height={197} alt='logo' src={logo} />
						<span>Broker</span>
					</div>
				</Link>
				{user.isLoading ? (
					<div>Loading</div>
				) : user.data?.data ? (
					<Link href='account'>
						<div ref={ref}>
							<Button className='bg-[rgb(205,0,28)] text-white px-5 py-2 text-lg font-light transition-all duration-200 hover:bg-[rgb(155,0,0)]'>
								Personal Account
							</Button>
						</div>
					</Link>
				) : (
					<div className='flex'>
						<Link href='auth'>
							<Button className='mr-4 white text-red border-[1px] px-5 py-1 text-lg font-light transition-all duration-200 hover:border-[rgb(205,0,28)] hover:text-[rgb(205,0,28)]'>
								Log In
							</Button>
						</Link>
						<Link href='auth'>
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
