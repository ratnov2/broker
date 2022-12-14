import React from 'react'

import style from './operations.module.scss'
import pointsImg from '@/assets/img/cards/cardPoints.png'
import Image from 'next/image'

const Operations = () => {
	return (
		<div className={style.operations}>
			<div className={style.top}>
        <Image src={pointsImg} alt='points'/>
				<h1>Top Up</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
			<div className={style.withdraw}>
        <Image src={pointsImg} alt='points'/>
				<h1>Withdraw</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
			</div>
		</div>
	)
}

export default Operations
