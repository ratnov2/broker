import {FC, useState} from 'react'

import Layout from '@/layout/Layout'
import CardRow from "@/screens/cards/cards-list/CardRow";
import Pagination from "@/screens/cards/cards-list/Pagination";

type cardsType = {
    type: 'Primary' | 'Secondary',
    bankName: string,
    holderName: string,
    cardNumber: string,
    validity: string,
    active: boolean
}

const cards: cardsType[] = [
    {
        type: 'Primary',
        bankName: 'Bank ABC',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1235',
        validity: '03/21',
        active: true
    },
    {
        type: 'Secondary',
        bankName: 'Bank DEF',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1236',
        validity: '03/21',
        active: false
    },{
        type: 'Secondary',
        bankName: 'Bank HIJ',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1237',
        validity: '03/21',
        active: true
    },
    {
        type: 'Primary',
        bankName: 'Bank ABC',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1238',
        validity: '03/21',
        active: true
    },
    {
        type: 'Secondary',
        bankName: 'Bank DEF',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1239',
        validity: '03/21',
        active: false
    },{
        type: 'Secondary',
        bankName: 'Bank HIJ',
        holderName: 'Rara Avis',
        cardNumber: '•••• •••• •••• 1224',
        validity: '03/21',
        active: true
    }
]


const CardList: FC = () => {
    const [activePage, setActivePage] = useState(1)

    return (
        <div className={'bg-white h-[562px] w-[1477px] pt-[32px] rounded-[40px]'}>
            <h1 className={'font-[\'Inter\'] font-bold text-1.5xl text-black mb-[44px] pl-[32px]'}>Card List</h1>
            {cards.slice((activePage-1)*3, (activePage-1)*3+3).map((cardRow) => <CardRow {...cardRow} key={cardRow.cardNumber}/>)}
            <Pagination length={cards.length} activePage={activePage} setActivePage={setActivePage}/>
        </div>

    )
}

export default CardList