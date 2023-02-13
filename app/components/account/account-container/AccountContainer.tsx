import Image from 'next/image'
import { FC } from 'react'

import Button from '@/ui/button/Button'

import person from '@/assets/images/person_logo.png'

import { PropsAccountInfo } from '../account-info/account-info.interface'

import style from './AccountContainer.module.scss'

const AccountContainer: FC<PropsAccountInfo> = ({ user, paymentHandler }) => {
	console.log(user.data?.data)

	const dataUser = user.data?.data
	return (
		<div className={style.account}>
			<div>
				<Image src={person} width={128} height={128} alt='person' />
			</div>
			<div>Name: {dataUser?.email}</div>
			<div className={style.pay}>
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
			</div>
		</div>
	)
}
export default AccountContainer
