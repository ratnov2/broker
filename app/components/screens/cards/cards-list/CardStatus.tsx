import { FC } from 'react'

type CardPropsType = {
	active: boolean
}

const CardStatus: FC<CardPropsType> = ({ active }) => {
	return (
		<>
			<div
				className={`flex w-[110px] h-[48px] rounded-[40px] text-white items-center justify-center ${
					active ? 'bg-green' : 'bg-red'
				}`}
			>
				{active ? 'Active' : 'Unactive'}
			</div>
		</>
	)
}

export default CardStatus
