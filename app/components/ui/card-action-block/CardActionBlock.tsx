import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import pointsImg from '@/assets/cardPoints.png'

import Arrow from '../arrow/Arrow'

import { PropsCardActionsBlock } from './card-action-block.interface'
import style from './CardActionBlock.module.scss'

const CardActionBlock: FC<PropsCardActionsBlock> = ({
	className,
	title,
	description,
	arrowDirection,
	link
}) => {
	return (
		<div className={cn(style.cardAction, className)}>
			<Image src={pointsImg} alt='points' width={30} height={30} />
			<h1>{title}</h1>
			<p>{description}</p>
			<Link href={link}>
				<Arrow className={arrowDirection==='left' ? 'rotate-90' : arrowDirection==='right' ? '-rotate-90':''} />
			</Link>
		</div>
	)
}

export default CardActionBlock
