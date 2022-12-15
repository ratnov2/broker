import React from 'react'
import styles from './style.module.scss'

function card() {
	return (
		<div>
			<section className={styles.card__container}>
				<h1 className={styles.card__title}>
					<span>My Balance</span>
					$12,345,789
				</h1>
				<div className={styles.card__number}>•••• •••• •••• 1234</div>
				<div className={styles.card__data}>
					<div className={styles.card__holder}>
						<span>Card Holder</span>
						Rara Avis
					</div>
					<div className={styles.card__thru}>
						<span>Valid Thru</span>
						03/21
					</div>
				</div>
			</section>
		</div>
	)
}

export default card
