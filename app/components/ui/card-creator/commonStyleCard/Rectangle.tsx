import cn from 'clsx'
import { FC } from 'react'

import style from './common-style-card.module.scss'

const Rectangle:FC = () => {
	return <div className={cn(style.rectangle, 'bg-light-blue')}></div>
}

export default Rectangle
