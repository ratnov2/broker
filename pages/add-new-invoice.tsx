import Image from 'next/image'
import { FC } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import AttachFile from '@/components/add-new-invoice/AttachFile'
import ClientContact from '@/components/add-new-invoice/ClientContact'
import InvoiceData from '@/components/add-new-invoice/InvoiceData'
import ItemDescription from '@/components/add-new-invoice/ItemDescription'

const AddNewInvoice: FC = () => {
	return (
		<>
			<h2 className='text-3xl font-bold mb-10'>Add New Invoice</h2>
			<div className='bg-white rounded-[40px] p-[32px]'>
				<div className='flex items-center mb-10'>
					<FiArrowLeft className='text-2xl font-bold' />
					<h3 className='text-xl font-bold ml-8'>New Invoices</h3>
				</div>
				<div className='flex'>
					<div className='w-2/5'>
						<ClientContact />
					</div>
					<div className='w-3/5'>
						<InvoiceData />
						<ItemDescription />
						<AttachFile />
						<div className='flex mt-16'>
							<button className='bg-purple py-3.5 px-10 mr-4 rounded-[40px] flex items-center text-white'>
								<span className='font-semibold mr-3'>
									Send Invoice
								</span>
								<Image
									src='/images/Send.svg'
									width={26}
									height={22}
									alt='address'
								/>
							</button>
							<button className='border py-3.5 px-10 rounded-[40px] border-gray text-purple font-semibold'>
								Save to Draft
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddNewInvoice
