import styles from './card.module.scss'

function card() {
	const data = [
		{
			id: 'MainCard',
			balance: '12,345,789',
			cardNumber: '•••• •••• •••• 1234',
			cardHolder: 'Rara Avis',
			validThru: '03/21'
		}
	]

	return (
		<div>
			{data.map(({ id, balance, cardNumber, cardHolder, validThru }) => {
				return (
					<section key={id} className={styles.card__container}>
						<h1 className={styles.title}>
							<span>My Balance</span>
							<p>${balance}</p>
						</h1>
						<div className={styles.number}>{cardNumber}</div>
						<div className={styles.data}>
							<div className={styles.holder}>
								<span>Card Holder</span>gg
								<p>{cardHolder}</p>
							</div>
							<div className={styles.thru}>
								<span>Valid Thru</span>
								<p>{validThru}</p>
							</div>
						</div>
					</section>
				)
			})}
		</div>
	)
}

export default card
