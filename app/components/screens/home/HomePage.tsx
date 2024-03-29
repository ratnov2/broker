import Layout from '@/layout/Layout'

import Slider from '@/ui/slider/Slider'
import Footer from './footer/Footer'
import AboutPerson from './about-person/AboutPerson'
import AboutCourse from './about-course/AboutCourse'
import style from './HomePage.module.scss'
import DuringCourse from './during-course/DuringCourse'
import ActiveCourse from './active-course/ActiveCourse'

const HomePage = () => {
	return (
		<Layout title='Home' >
			<div className='m-auto'>
				<Slider />
				<div className={style.home}>
					<AboutPerson />
					<AboutCourse />
					<DuringCourse />
					<ActiveCourse />
				</div>
				<Footer />
			</div>
		</Layout>
	)
}
export default HomePage
