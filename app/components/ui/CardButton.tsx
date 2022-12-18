import {FC} from 'react'

type ButtonPropsType = {
    active:boolean
}

const CardButton: FC <ButtonPropsType> = ({active}) => {
    return (
        <>
            <button className={`w-[110px] h-[48px] rounded-[40px] text-white ${active ? 'bg-green' : 'bg-red'}`}>
                {active ? 'Active' : 'Unactive'}
            </button>
        </>
    );
}

export default CardButton;