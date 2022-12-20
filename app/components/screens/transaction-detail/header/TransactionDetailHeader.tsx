import { FC } from 'react'
import Image from 'next/image'
import { ITransactionDetail } from '@/screens/transaction-detail/transaction-detail.interface';

const TransactionDetailHeader: FC<ITransactionDetail> = (props) => {

    return (
        <>
            <div className='flex  items-start'>
                <span className='text-sm text-[#8E8EA1]'>Project name</span>
            </div>
            <h1 className='text-top text-4xl font-bold text-black'>
                {props.project}
            </h1>

            <div className='flex  items-start  justify-between border-b  border-light-gray  text-sm text-[#8E8EA1] mt-2 p-1'>
                <div>
                    <div className='w-96 mb-3'>Client</div>
                    <div className='flex'>
                        <Image
                            src='/images/avatar-empty.png'
                            width={80}
                            height={80}
                            alt=''
                        />
                        <div className='ml-3'>
                            <h2 className='flex flex-wrap text-xl font-bold text-black'>
                                White Space inc.
                            </h2>
                            <span className='flex flex-wrap text-sm'>
                                18 Guild Street London, EC2V 5PX United Kingdom
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-48 mb-3'>Contact</div>
                    <div className='flex'>
                        <div>
                            <span className='flex flex-wrap text-sm font-bold text-black'>
                                whitespace@email.com
                            </span>
                            <span className='flex flex-wrap text-sm font-bold text-black'>
                                +123 456 789
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-48 mb-3'>Recipient</div>
                    <div className='flex'>
                        <div>
                            <span className='flex flex-wrap text-sm font-bold text-black'>
                                Samantha William
                            </span>
                            <span className='flex flex-wrap text-sm'>
                                samantha@email.com
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='w-48 mb-3 mr-9' >Location</div>
                    <div className='flex'>
                        <div>
                            <span className='flex flex-wrap text-sm font-bold text-black'>
                                United Kingdom
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-2 border-indigo-600 mt-5'></div>

            <div className='flex  items-start justify-between border-b  border-light-gray  text-sm text-[#8E8EA1] mt-3 p-1'>
                <div className='w-[600px] mb-3' >Payment type</div>
                <div className='flex items-start justify-end'>
                    <div className='w-[200px] mb-3' >Item Description</div>
                    <div className='w-[200px] mb-3' >Duration</div>
                    <div className='w-[170px] mb-3 justify-items-center' >Rate</div>
                    <div className='w-[90px] mb-3 justify-items-center' >Amount</div>
                </div>
            </div>

        </>
    )
}

export default TransactionDetailHeader