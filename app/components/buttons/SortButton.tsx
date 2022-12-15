import { FC } from 'react';
import React from 'react'
import { TiArrowSortedDown } from 'react-icons/Ti'

import styles from './Button.module.scss'


const SortButton: FC = () => {

    return (
      <div>
        <button className={styles.sortBtn}>
          newest
          <TiArrowSortedDown className='mt-2 ml-1'/>
        </button>
      </div>
    )
}

export default SortButton