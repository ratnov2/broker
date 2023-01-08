const monthList = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'June',
	'July',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
]

const weekList = [
	'Monday',
	'Tuesday',
	'Wednesday ',
	'Thursday ',
	'Friday',
	'Saturday',
	'Sunday '
]

export const convertDateDetail = (str: string) => {
    const date = new Date(str)
	const [day, month, year] = date.toLocaleDateString('ru').split('.')
    const dayweek = date.getDay()
	const time = str.slice(str.indexOf('T') + 1, str.indexOf('.'))

	return [`${weekList[dayweek]} ${monthList[+month - 1]}, ${day}, ${year}`]
}