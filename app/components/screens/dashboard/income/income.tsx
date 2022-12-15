import styles from './income.module.scss'

function income() {
	return (
		<div className={styles.income__container}>
			<div className={styles.income__inner}>
				<div className={styles.income__top}>
					<div className={styles.income__total}>
						<span>Income</span>
						$45,741
					</div>
					<div className={styles.income__changes}>
						+0,5%
						<span>last month</span>
					</div>
				</div>
				<div className={styles.income__bot}></div>
			</div>
		</div>
	)
}
export default income
