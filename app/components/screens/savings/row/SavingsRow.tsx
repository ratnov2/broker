import {FC, useState} from 'react'
import SavingsButton from "@/screens/savings/button/SavingsButton";
import {SavingsData} from "@/screens/savings/data/savings";


const SavingsRow: FC<SavingsData> = ({ id, name, amount, topUp, currency, color, bColor}: SavingsData) => {

    return (
        <tr className="h-24" style={{ backgroundColor: bColor }}>
            <td className="px-6 py-4 whitespace-nowrap w-6 pl-8">
                <div className='rounded-3xl w-8 h-8' style={{ backgroundColor:color }}></div>
            </td>
            <td className="text-sm text-center text-gray-900 font-bold px-6 py-4 whitespace-nowrap ">
                {name}
            </td>
            <td className="text-sm text-center text-gray-900 px-6 py-4 whitespace-nowrap font-medium"
                style={{color:'#6160dc'}}
            >
                ID #{id}
            </td>
            <td className="text-sm text-center text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                {currency} {amount}
            </td>
            <td className='text-center'>
                <SavingsButton
                    color={'#6160dc'}
                    text={'Top up'}
                    height={'h-9'}
                    width={'w-40'}
                ></SavingsButton>
            </td>
            <td>
                <SavingsButton
                    color={'#03daf2'}
                    text={'Withdraw'}
                    height={'h-9'}
                    width={'w-40'}
                ></SavingsButton>
            </td>
            <td className='w-20 text-center font-bold'>
                ...
            </td>
        </tr>
    )
}

export default SavingsRow;