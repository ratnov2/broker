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

export const convertDate = (str: string) => {
	const [day, month, year] = new Date(str).toLocaleDateString('ru').split('.')
	const time = str.slice(str.indexOf('T') + 1, str.indexOf('.'))

	return [`${day} ${monthList[+month - 1]}, ${year}`, time]
}
