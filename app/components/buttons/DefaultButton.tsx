import { FC } from 'react';
import React from 'react'

import styles from './Button.module.scss'


const DefaultButton: FC = () => {

    return (
      <div>
        <button className={styles.defaultBtn}>
          Transfer
        </button>
      </div>
    )
}

export default DefaultButton