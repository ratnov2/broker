import style from './AccountInfo.module.scss'
import AboutCourse from '@/screens/home/about-course/AboutCourse'

const AccountInfo = () => {
	return (
		<div className=''>
			<AboutCourse customStyle={style.person} />
		</div>
	)
}
export default AccountInfo
