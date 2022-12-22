import { FC, SetStateAction, useState } from 'react'

import Layout from '@/layout/Layout'

import { usePaymentSources } from '@/hooks/usePaymentSources'

import PaymentContact from './payment-sources-item/PaymentSourcesItem'
import PaymentSourcesTopTitle from './payment-sources-top-title/PaymentSourcesTopTitle'
import Loader from '@/ui/pagination/loader/Loader'

const PaymentSources: FC = () => {
	const [currentFilterOption, serCurrentFilterOption] = useState('newest')

	const { isLoadingPaymentSources, paymentSources } =
		usePaymentSources(currentFilterOption)
	const onChange = (newValue: any) => {
		serCurrentFilterOption(newValue.value)
	}

	return (
		<Layout title='Payment Sources'>
			<div className='h-full w-full'>
				<PaymentSourcesTopTitle />
				<div className='flex flex-wrap justify-between'>
			{isLoadingPaymentSources ? (
				<Loader />
			) : paymentSources?.length ? (
				<>
					{paymentSources.map(paymentContact => (
						<PaymentContact paymentContact={paymentContact} />
					))}
				</>
			) : (
				<div className='h-[225px] flex items-center justify-center'>
					Payment contacts not found
				</div>
			)}
		</div>
			</div>
		</Layout>
	)
}

export default PaymentSources
