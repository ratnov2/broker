import styles from './card.module.scss'

function card() {
	return (
		<div>
			<section className={styles.card__container}>
				<h1 className={styles.title}>
					<span>My Balance</span>
					$12,345,789
				</h1>
				<div className={styles.number}>•••• •••• •••• 1234</div>
				<div className={styles.data}>
					<div className={styles.holder}>
						<span>Card Holder</span>
						Rara Avis
					</div>
					<div className={styles.thru}>
						<span>Valid Thru</span>
						03/21
					</div>
				</div>
			</section>
		</div>
	)
}

export default card
