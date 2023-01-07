import { FC, useState } from 'react';
import React from 'react'
import { BsToggle2Off } from 'react-icons/Bs'
import { BsToggle2On } from 'react-icons/Bs'

import styles from './Button.module.scss'

const SwitchButton: FC = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(t => !t)
  }
  return (
    <div>
      <div onClick={handleClick} className={styles.switchBtn}>
        {toggle === false ? <BsToggle2Off/> : <BsToggle2On/>}
      </div>
    </div>
  )
}

export default SwitchButton