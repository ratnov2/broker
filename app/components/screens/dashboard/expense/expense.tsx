import styles from './expense.module.scss'

function expense() {
	return (
		<div className={styles.expense__container}>
			<div className={styles.expense__inner}>
				<div className={styles.expense__top}>
					<div className={styles.expense__total}>
						<span>Expense</span>
						$32,123
					</div>
					<div className={styles.expense__changes}>
						-0,5%
						<span>last month</span>
					</div>
				</div>
				<div className={styles.expense__bot}></div>
			</div>
		</div>
	)
}

export default expense
