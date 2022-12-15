import { FC } from 'react';
import React from 'react'

import styles from './Button.module.scss'


const ViewMoreButton: FC = () => {

    return (
      <div>
        <button className={styles.viewMoreBtn}>
          View more
        </button>
      </div>
    )
}

export default ViewMoreButton