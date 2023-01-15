import { convertDate } from '@/utils/convert-date'

export const formatDate = (date: string) => {
	const timestamp = new Date(date).getTime()
	const diff = +new Date() - timestamp // the difference in milliseconds

	if (diff < 1000) {
		// less than 1 second
		return 'right now'
	}

	const sec = Math.floor(diff / 1000) // convert diff to seconds

	if (sec < 60) {
		return sec + ' sec. ago'
	}

	const min = Math.floor(diff / 60000) // convert diff to minutes
	if (min < 60) {
		return min + ' min. ago'
	}

	const hour = Math.floor(diff / 3600000) // convert diff to hour
	if (hour < 24) {
		return hour + ' h. ago'
	} else {
		return convertDate(date)[0]
	}
}
