import Router from 'next/router'
import { FC } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import Layout from '@/layout/Layout'

import styles from '@/screens/transaction-detail/TransactionDetail.module.scss'
import Footer from '@/screens/transaction-detail/footer/Footer'
import Header from '@/screens/transaction-detail/header/Header'
import Items from '@/screens/transaction-detail/items/Items'
import Title from '@/screens/transaction-detail/title/Title'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface'

const TransactionDetail: FC<ITransactionDetail> = props => {
	return (
		<Layout title='Transaction detail'>
			<div className={styles.detail}>
				<h1 className={styles.h1div}>Transaction detail</h1>

				<div className={styles.section}>
					<div className={styles.flexdiv}>
						<FiArrowLeft
							className={styles.leftarrow}
							onClick={() => Router.back()}
						/>
						<div className={styles.growdiv}>
							<Title {...props} />
							<Header {...props} />
							<Items {...props} />
							<Footer {...props} />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default TransactionDetail
