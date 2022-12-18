import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import pointsImg from '@/assets/cardPoints.png'

import Arrow from '../arrow/Arrow'

import { PropsCardActionsBlock } from './card-action-block.interface'
import style from './card-action-block.module.scss'

const CardActionBlock: FC<PropsCardActionsBlock> = ({
	className,
	textH1,
	textP,
	classArrow,
	link
}) => {
	return (
		<div className={cn(style.cardAction, className)}>
			<Image src={pointsImg} alt='points' width={30} height={30} />
			<h1>{textH1}</h1>
			<p>{textP}</p>
			<Link href={link}>
				<Arrow className={classArrow} />
			</Link>
		</div>
	)
}

export default CardActionBlock
