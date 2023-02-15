import Layout from '@/layout/Layout'

import Slider from '@/ui/slider/Slider'

import Sidebar from '../sidebar/Sidebar'

import style from './HomePage.module.scss'
import AwardWinning from './award-winning/AwardWinning'
import BrokerSecurity from './broker-security/BrokerSecurity'
import DropLinks from './drop-links/Droplinks'
import LowCost from './low-cost/LowCost'
import TradingTechnology from './trading-technology/TradingTechnology'
import Footer from './footer/Footer'
import AboutPerson from './about-person/AboutPerson'
import AboutCourse from './about-course/AboutCourse'

const HomePage = () => {


	return (
		<Layout title='Home' >
			<div className='m-auto '>
				<Slider />
				<div className='w-[1200px] m-auto'>
					<DropLinks />
					<AwardWinning />
					<LowCost />
					<TradingTechnology />
					<BrokerSecurity />
					<AboutPerson />
					<AboutCourse />
				</div>
				<Footer />
			</div>
		</Layout>
	)
}
export default HomePage
