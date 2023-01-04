import { FC, useEffect, useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import Layout from '@/layout/Layout'

import styles from '@/screens/transaction-detail/TransactionDetail.module.scss'
import Footer from '@/screens/transaction-detail/footer/Footer'
import Header from '@/screens/transaction-detail/header/Header'
import Items from '@/screens/transaction-detail/items/Items'
import Title from '@/screens/transaction-detail/title/Title'
import { mockDataTransactionDetail } from '@/screens/transaction-detail/transaction-detail.data'
import {
	ITransactionDetail,
	ITransactionSelect
} from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetail: FC<ITransactionSelect> = props => {
	const [transactionDetail, setTransactionDetail] =
		useState<ITransactionDetail>({} as ITransactionDetail)
	const [isLoading, setIsLoading] = useState(true)

	const getTransactionDetail = async (param: ITransactionSelect) => {
		return mockDataTransactionDetail
	}

	useEffect(() => {
		getTransactionDetail(props)
			.then((data: ITransactionDetail) => {
				setTransactionDetail(data)
				setIsLoading(false)
			})
			.catch(error => {
				console.error('Error fetch transaction detail', error)
			})
	}, [])

	if (isLoading) {
		return (
			<div className='flex items-center justify-center'>
				Loading transaction detail..
			</div>
		)
	}

	return (
		<Layout title='Transaction detail'>
			<div className={styles.detail}>
				<h1 className='text-4xl font-bold text-black'>Transaction detail</h1>

				<div className={styles.section}>
					<FiArrowLeft className={styles.leftarrow}/>
					<div>
						<Title {...transactionDetail} />
						<Header {...transactionDetail} />
						<Items {...transactionDetail} />
						<Footer {...transactionDetail} />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default TransactionDetail
