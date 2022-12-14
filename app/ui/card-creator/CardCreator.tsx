import React, { FC } from 'react'
import { TypesCardCreator } from './card-creator.interface'

import style from './card-creator.module.scss'
import cn from 'classnames'
import CommonCardStyle from './common/CommonCardStyle'
import { makeMoney } from '@/utils/makeMoney'


const CardCreator:FC<TypesCardCreator> = ({balance,holder, valid, NCard,bg}) => {
	return (
		<div className={cn(style.card,bg)}>
			<CommonCardStyle />
      <div className={style.balance}>
        <h3>Balance</h3>
        <p>${makeMoney(balance)}</p>
      </div>
      <div className={style.NCard}>
        <p>{NCard}</p>
      </div>
      <div className={style.holder}>
        <h3>holder</h3>
        <p>{holder}</p>
      </div>
      <div className={style.valid}>
        <h3>Valid Thru</h3>
        <p>{valid?.month}/{valid?.year}</p>
      </div>
      
		</div>
	)
}

export default CardCreator
