import { FC, SetStateAction, useState } from 'react'

import Layout from '@/layout/Layout'

import Loader from '@/ui/pagination/loader/Loader'

import { usePaymentSources } from '@/hooks/usePaymentSources'

import PaymentContact from './payment-sources-item/PaymentSourcesItem'
import PaymentSourcesTopTitle from './payment-sources-top-title/PaymentSourcesTopTitle'

const PaymentSources: FC = () => {
	const [currentFilterOption] = useState('newest')

	const { isLoadingPaymentSources, paymentSources } =
		usePaymentSources(currentFilterOption)

	return (
		<Layout title='Payment Sources'>
			<div className='h-full w-full mt-12'>
				<PaymentSourcesTopTitle />
				{isLoadingPaymentSources ? (
					<Loader />
				) : paymentSources?.length ? (
					<div className='flex flex-wrap justify-between'>
						{paymentSources.map(paymentContact => (
							<PaymentContact paymentContact={paymentContact} />
						))}
					</div>
				) : (
					<div className='h-[225px] flex items-center justify-center'>
						Payment contacts not found
					</div>
				)}
			</div>
		</Layout>
	)
}

export default PaymentSources
