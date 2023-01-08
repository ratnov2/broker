import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { useTransactionById } from '../../app/hooks/useTransactionDetailById'

import TransactionDetail from '@/screens/transaction-detail/TransactionDetail'

const Detail: NextPage = () => {
	const { query } = useRouter()
	const { data, isLoading } = useTransactionById(String(query?.id))

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : !data ? null : (
				<TransactionDetail {...data} />
			)}
		</>
	)
}

export default Detail
