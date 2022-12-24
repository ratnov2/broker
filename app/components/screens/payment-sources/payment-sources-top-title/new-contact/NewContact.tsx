import { FC, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import styles from './NewContact.module.scss'

const NewContact: FC = ({}) => {
	const onClick = (newValue: any) => {
		alert('Not developed yet')
	}

	return (
		<button className={styles.button} onClick={onClick}>
			<span className={'ml-2'}>New Contact</span>
			<AiOutlinePlus className={'mx-2 font-bold'} />
		</button>
	)
}

export default NewContact
