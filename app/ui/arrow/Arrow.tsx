
import React, { FC } from 'react'
import style from './arrow.module.scss'
  import {BsArrowRightShort} from 'react-icons/bs'
  import cn from 'classnames'
import { TypesArrow } from './arrow-inteface'

  const Arrow:FC<TypesArrow> = ({className,...rest}) => {
    return (
      <span className={cn(style.arrow,className)} {...rest}>
        <BsArrowRightShort />
      </span>
    )
  }
  
  export default Arrow