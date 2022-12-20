import { FC, useState, useEffect } from 'react'
import Layout from '@/layout/Layout'
import TransactionDetailHeader from '@/screens/transaction-detail/header/TransactionDetailHeader';
import TransactionDetailFooter from '@/screens/transaction-detail/footer/TransactionDetailFooter';
import TransactionDetailItem from '@/screens/transaction-detail/row/TransactionDetailItem';
import { mockDataTransactionDetail } from '@/screens/transaction-detail/transaction-detail.data';
import { ITransactionDetail, ITransactionSelect, EmptyITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface';

const TransactionDetail: FC<ITransactionSelect> = (props) => {

	const [transactionDetail, setTransactionDetail] = useState<ITransactionDetail>(EmptyITransactionDetail)
	const [isLoading, setIsLoading] = useState(false)

	//data from Redux or fetch
	const getTransactionDetail = async (param: ITransactionSelect) => {
		return mockDataTransactionDetail
	}

	useEffect(() => {
		getTransactionDetail(props).then((data: ITransactionDetail) => {
			setTransactionDetail(data);
			setIsLoading(true)
		}).catch(error => {
			console.error('Error fetch transaction detail', error);
		})
	}, []);


	if (!isLoading) {
		return (
			<div className='h-[601px] flex items-center justify-center'>
				Loading transaction detail..
			</div>
		)
	}

	return (
		<Layout title='Transaction detail'>

			<div className='h-screen w-full'>
				<h1 className='text-top text-4xl font-bold text-black'>
					Transaction detail
				</h1>

				<div className='bg-white rounded-3xl'>

				<TransactionDetailHeader {...transactionDetail} />

				<div className='flex  items-start justify-between border-b  border-light-gray  text-sm text-[#8E8EA1] mt-3 p-1'>
					<div>
						<div className='w-[600px] mb-3 font-bold text-black' >{transactionDetail.paymentType}</div>
						<div className='w-[600px] mb-3 mt-5' >Due Date</div>
						<div className='w-[600px] mb-3 font-bold text-[#262666]' >{transactionDetail.payTable.length ? transactionDetail.payTable[0].date : '----'}</div>
					</div>
					<div>
						{transactionDetail.payTable.map(item => (<TransactionDetailItem {...item} key={item.id} />))}
					</div>
				</div>

				<TransactionDetailFooter {...transactionDetail} />

				</div>

			</div>

		</Layout>
	)
}

export default TransactionDetail