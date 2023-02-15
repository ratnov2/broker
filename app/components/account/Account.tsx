import { useMutation } from '@tanstack/react-query'
import { log } from 'console'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'

import Layout from '@/layout/Layout'

import { useGetProfile } from '@/hooks/useGetProfile'

import style from './Account.module.scss'
import AccountContainer from './account-container/AccountContainer'
import AccountInfo from './account-info/AccountInfo'
import Footer from '@/screens/home/footer/Footer'
import { PaymentService } from '@/services/pay/pay.service'

const Account = () => {
	const { push } = useRouter()

	const user = useGetProfile()

	const infoPayment = useMutation(['info-payment'], () =>
		PaymentService.getInfoPayment()
	)

	useEffect(() => {
		let data = user.data?.data
		if (data) {
			if (!data.isPayment) {
				infoPayment.mutate()
			}
		}
	}, [user.data?.data])

	const payment = useMutation(
		['post-payment'],
		() => PaymentService.createPayment(),
		{}
	)

	useEffect(() => {
		if (payment.data?.data) {
			push(payment.data.data.confirmation.confirmation_url)
		}
	}, [payment.data])

	const paymentHandler = () => payment.mutate()

	return (
		<Layout title='Personal'>
			<div className={style.account}>
				<div className={style.content}>
					<div className='col-span-1'>
						<AccountContainer
							user={user}
							paymentHandler={paymentHandler}
						/>
					</div>
					<div className='col-span-2'>
						<AccountInfo />
					</div>
				</div>
			</div>
			<Footer />
		</Layout>
	)
}
export default Account
