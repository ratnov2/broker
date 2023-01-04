import { FC } from 'react'

import {
	AiOutlinePrinter,
} from 'react-icons/ai'

import styles from './Print.module.scss'

const Print: FC = ({}) => {
	const onClick = () => {
		alert('Not developed yet')
	}

	return (
		<button className={styles.button} onClick={onClick}>
			<span className={'ml-3'}>Print</span>
			<AiOutlinePrinter size={30}/>
		</button>
	)
}

export default Print
