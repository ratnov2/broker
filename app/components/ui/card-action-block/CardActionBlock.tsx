import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'

import pointsImg from '@/assets/cardPoints.png'

import Arrow from '../arrow/Arrow'
import Modal from '../modal/Modal'

import style from './CardActionBlock.module.scss'
import { PropsCardActionsBlock } from './card-action-block.interface'

const CardActionBlock: FC<PropsCardActionsBlock> = ({
	className,
	title,
	description,
	arrowDirection,
	link
}) => {
	const [showModal, setShowModal] = useState(false)
	return (
		<div className={cn(style.cardAction, className)}>
			<Image src={pointsImg} alt='points' width={30} height={30} />
			<div id='modal-root'></div>
			<h1>{title}</h1>
			<p>{description}</p>
			<button onClick={() => setShowModal(true)}>
				<Arrow
					className={
						arrowDirection === 'left'
							? 'rotate-90'
							: arrowDirection === 'right'
							? '-rotate-90'
							: ''
					}
				/>
			</button>
			<Modal title={title} onClose={() => setShowModal(false)} show={showModal}>
				<span>Top up from account {title}</span>
			</Modal>
		</div>
	)
}

export default CardActionBlock