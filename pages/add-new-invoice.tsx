import { FC } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

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
					</div>
				</div>
			</div>
		</>
	)
}

export default AddNewInvoice
