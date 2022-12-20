import {FC} from 'react'
import CardButton from "@/ui/CardButton"

type CardRowPropsType = {
    type: 'Primary' | 'Secondary',
    bankName: string,
    holderName: string,
    cardNumber: string,
    validity: string,
    active: boolean
}

const CardRow: FC<CardRowPropsType> = (props) => {

    return (
        <div className={'flex items-center py-[16px] pl-[32px] h-112px border-y odd:border-0 border-black/10'}>
            <img className={'w-[120px] h-[80px] mr-[24px]'} src="/images/card.png" alt="card"/>
            <div className={'my-auto w-[100px]'}>
                <span className={'block text-sm text-gray'}>Card Type</span>
                <span className={'block text-lg font-semibold'}>{props.type}</span>
            </div>
            <div className={'my-auto ml-[110px] w-[200px]'}>
                <span className={'block text-sm text-gray'}>Bank Name</span>
                <span className={'block text-lg font-semibold'}>{props.bankName}</span>
            </div>
            <div className={'my-auto ml-[20px] w-[180px]'}>
                <span className={'block text-sm text-gray'}>Name</span>
                <span className={'block text-lg font-semibold'}>{props.holderName}</span>
            </div>
            <div className={'my-auto'}>
                <span className={'block text-sm text-gray'}>Card Number</span>
                <span className={'block text-lg font-semibold'}>{props.cardNumber}</span>
            </div>
            <div className={'my-auto ml-[105px] mr-[142px]'}>
                <span className={'block text-sm text-gray'}>Valid Thru</span>
                <span className={'block text-lg font-semibold'}>{props.validity}</span>
            </div>
            <CardButton active={props.active}/>
        </div>
    )
}

export default CardRow