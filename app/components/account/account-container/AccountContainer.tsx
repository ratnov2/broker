import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'

import Button from '@/ui/button/Button'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import person from '@/assets/images/person_logo.png'

import { PropsAccountInfo } from '../account-info/account-info.interface'

//import doc from '../../../assets/public/tutoring_contract.docx'
import style from './AccountContainer.module.scss'
import { AuthService } from '@/services/auth/auth.service'
import { ReadFileService } from '@/services/read-file/pay.service'

const AccountContainer: FC<PropsAccountInfo> = ({ user, paymentHandler }) => {
	const path = useRouter()

	const queryClient = useQueryClient()
	const makeReadFile = useMutation(
		['makeReadFile'],
		(data: { have_read: boolean }) => ReadFileService.makeRead(data)
	)
	const [isValue, setIsValue] = useState(false)

	const SendMake = () => {
		makeReadFile.mutate({ have_read: true })
	}
	const logout = () => {
		AuthService.logout()
		queryClient.setQueryData(['get-user'], null)
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
				<>
					<div>Name: {dataUser?.firstName}</div>
					<div>
						Read File:{' '}
						{dataUser?.have_read === false ? (
							<p>None</p>
						) : dataUser?.have_read === true ? (
							<>Yes</>
						) : (
							''
						)}
					</div>
				</>
			)}
			<div className={style.pay}>
				{user.isLoading && (
					<SkeletonLoader count={2} className='h-6 w-3/5' />
				)}
				{/* {user.data?.data.isPayment && (
					<div className=''>
						<Link href='/courses'>
							<Button className='bg-purple text-white px-5 py-2 rounded-[20px] transition-all duration-150  hover:bg-[rgba(69,0,207)]'>
								Go to courses
							</Button>
						</Link>
					</div>
				)} */}
				{user.data?.data.isPayment === false && (
					<>
						<div>
							<p>The cost of the course is total</p>
							<p>1500USD</p>
						</div>
					</>
				)}
				<>
					<div className='mt-10'>
						<h2 className='text-3xl'>Read a file</h2>
						<a
							className='text-red text-xl hover:text-[rgb(155,0,0)]'
							href='https://server.option-trading.ca/uploads/tutoring_contract.docx'
							download
						>
							download file
						</a>
						{user.data?.data.have_read === false && (
							<div>
								<div className='my-5 cursor-pointer'>
									<input
										type='checkbox'
										checked={isValue}
										onChange={() => setIsValue(!isValue)}
									/>{' '}
									<span onClick={() => setIsValue(!isValue)}>
										I have read the file
									</span>
								</div>
								{isValue && (
									<Button
										className='bg-purple px-4 py-2 text-white rounded-full'
										onClick={() => SendMake()}
										disabled={makeReadFile.isLoading}
									>
										Send consent
									</Button>
								)}
							</div>
						)}
					</div>
				</>
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
