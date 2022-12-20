import { FC } from 'react'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface';

const TransactionDetailFooter: FC<ITransactionDetail> = (props) => {

    return (
        <>
            <div className='border border-indigo-600 mt-5 text-[#8E8EA1]'></div>

            <div className='flex items-start justify-between border-b  border-light-gray  text-sm text-[#8E8EA1] mt-3 p-1'>
                <div className='w-[600px] mb-1' ></div>
                <div className='flex items-start justify-end'>
                    <div className='w-[200px] mb-1 font-bold'>Subtotal</div>
                    <div className='w-[200px] mb-1'></div>
                    <div className='w-[170px] mb-1 justify-items-center'></div>
                    <div className='w-[90px] mb-1 justify-items-center font-bold' >${props.subtotal}</div>
                </div>
            </div>

            <div className='flex items-start justify-between border-b  border-light-gray  text-sm text-[#8E8EA1] mt-1 p-1'>
                <div className='w-[600px] mb-1' ></div>
                <div className='flex items-start justify-end'>
                    <div className='w-[200px] mb-1 font-bold'>Tax</div>
                    <div className='w-[200px] mb-1'></div>
                    <div className='w-[170px] mb-1 justify-items-center'></div>
                    <div className='w-[90px] mb-1 justify-items-center font-bold' >{props.tax}%</div>
                </div>
            </div>

            <div className='flex items-start justify-between border-b  border-light-gray  text-sm text-[#8E8EA1] mt-1 p-1'>
                <div className='w-[600px] mb-1' ></div>
                <div className='flex items-start justify-end'>
                    <div className='w-[200px] mb-1 font-bold'>Total</div>
                    <div className='w-[200px] mb-1'></div>
                    <div className='w-[170px] mb-1 justify-items-center'></div>
                    <div className='w-[90px] mb-1 justify-items-center font-bold text-xl text-black' >${props.total}</div>
                </div>
            </div>

            <div className='text-left p-2 text-sm text-[#8E8EA1] bg-[#bdbdc5] rounded-lg'>
                <span className='mb-2'>Note:</span>
                <p className='text-left text-black'>{props.note}</p>
            </div>
        </>
    )
}

export default TransactionDetailFooter