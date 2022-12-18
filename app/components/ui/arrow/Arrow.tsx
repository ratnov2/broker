import cn from 'clsx'
import React, { FC } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

import { TypesArrow } from './arrow-inteface'
import style from './arrow.module.scss'

const Arrow: FC<TypesArrow> = ({ className, ...rest }) => {
	return (
		<span className={cn(style.arrow, className)} {...rest}>
			<BsArrowRightShort />
		</span>
	)
}

export default Arrow
