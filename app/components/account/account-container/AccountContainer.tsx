import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Button from '@/ui/button/Button'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import person from '@/assets/images/person_logo.png'

import { PropsAccountInfo } from '../account-info/account-info.interface'

import style from './AccountContainer.module.scss'
import { AuthService } from '@/services/auth/auth.service'
import { useRouter } from 'next/router'
import { useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'


const AccountContainer: FC<PropsAccountInfo> = ({ user, paymentHandler }) => {
	const path = useRouter()
	const queryClient = useQueryClient()
	const logout = ()=>{
		AuthService.logout()
		queryClient.setQueryData(['get-user'],null)
		toast.success('Successfully logged out')
		path.replace('/')

	}
	const dataUser = user.data?.data
	return (
		<div className={style.account}>
			<div>
				<Image src={person} width={128} height={128} alt='person' />
			</div>
			{user.isLoading && (
				<SkeletonLoader count={1} className='h-5 w-3/5' />
			)}
			{!user.isLoading && user.data?.data && (
				<div>Name: {dataUser?.email}</div>
			)}
			<div className={style.pay}>
				{user.isLoading && (
					<SkeletonLoader count={2} className='h-6 w-3/5' />
				)}
				{user.data?.data.isPayment && (
					<div className=''>
						<Link href='/courses'>
							<Button className='bg-purple text-white px-5 py-2 rounded-[20px] transition-all duration-150  hover:bg-[rgba(69,0,207)]'>
								Go to courses
							</Button>
						</Link>
					</div>
				)}
				{user.data?.data.isPayment === false && (
					<>
						<div>
							<p>The cost of the course is total</p>
							<p>1400USD</p>
						</div>
						<div className='my-10'>
							<Button
								className='bg-red px-5 py-2'
								onClick={() => paymentHandler()}
							>
								PAYMENT
							</Button>
						</div>
					</>
				)}
			</div>
			<div className='absolute bottom-10 w-[100%]'>
				<Button
					onClick={logout}
					className='bg-[rgb(207,37,37)] px-5 py-2 text-white hover:bg-[rgb(255,27,27)]'
				>
					Logout
				</Button>
			</div>
		</div>
	)
}
export default AccountContainer
