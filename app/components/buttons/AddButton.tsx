import { FC } from 'react';
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import styles from './Button.module.scss'


const AddButton: FC = () => {

    return (
      <div>
        <button className={styles.addBtn}>
            <AiOutlinePlus className='mt-1'/>
        </button>
      </div>
    )
}

export default AddButton