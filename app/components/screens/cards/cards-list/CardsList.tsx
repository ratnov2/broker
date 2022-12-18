import {FC} from 'react'

import Layout from '@/layout/Layout'
import CardRow from "@/screens/cards/cards-list/CardRow";

type fakeDataType = {
    type: 'Primary' | 'Secondary',
    bankName: string,
    holderName: string,
    cardNumber: string,
    validity: string,
    active: boolean
}

const fakeData: fakeDataType[] = [
    {
        type: 'Primary',
        bankName: 'Bank ABC',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1234',
        validity: '03/21',
        active: true
    },
    {
        type: 'Secondary',
        bankName: 'Bank DEF',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1234',
        validity: '03/21',
        active: false
    },{
        type: 'Secondary',
        bankName: 'Bank HIJ',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1234',
        validity: '03/21',
        active: true
    }
]

const CardList: FC = () => {
    return (
        <div className={'bg-white h-[562px] w-[1477px] pt-[32px] rounded-[40px]'}>
            <h1 className={'font-[\'Inter\'] font-bold text-1.5xl text-black mb-[44px] pl-[32px]'}>Card List</h1>
            {fakeData.map((cardRow) => <CardRow {...cardRow}/>)}
        </div>

    )
}

export default CardList