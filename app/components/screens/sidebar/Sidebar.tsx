import Image from 'next/image'

import logo from '@/assets/images/logoBr.png'

import style from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<div className={style.sidebar}>
			<div className={style.navigate}>
				<div className={style.logo}>
					<Image width={176} height={197} alt='logo' src={logo} />
					<span>Broker</span>
				</div>
				<button>Login</button>
			</div>
		</div>
	)
}
export default Sidebar
