import styles from './expense.module.scss'

function expense() {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.top}>
					<div className={styles.total}>
						<span>Expense</span>
						$32,123
					</div>
					<div className={styles.changes}>
						-0,5%
						<span>last month</span>
					</div>
				</div>
				<div className={styles.bot}></div>
			</div>
		</div>
	)
}

export default expense
