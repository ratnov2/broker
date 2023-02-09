import style from './Check.module.scss'

const Check = () => {
	return (
		<div className={style.wrap}>
			<div className={`${style.checkSign} ${style.checkPart1}`}></div>
			<div className={`${style.checkSign} ${style.checkPart2}`}></div>
		</div>
	)
}
export default Check
