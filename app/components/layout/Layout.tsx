import { FC, PropsWithChildren } from 'react'

import Card from './dashboard/card/card'
import styles from './dashboard/dashboard.module.scss'
import Expense from './dashboard/expense/expense'
import Income from './dashboard/income/income'
import Header from './header/Header'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'
import Sidebar from './sidebar/Sidebar'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />
			<div className={styles.layout}>
				<Sidebar />
				<main>
					<Header />
					<section className={styles.content}>{children}</section>
					<div className={styles.dashboard__container}>
						<h1 className={styles.dashboard}>Dashboard</h1>
						<div className={styles.dashboard__inner}>
							<Card />
							<Income />
							<Expense />
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Layout
