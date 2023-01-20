import { getKeys } from '@/utils/object'
import {
	ITailwindColorsFiltered,
	tailwindColorsFiltered
} from '@/utils/tailwind-colors'

export const loopColors = (object: {
	[key: string]: any
}): ITailwindColorsFiltered[] => {
	const objectLength = Object.values(object).length

	const colors: ITailwindColorsFiltered[] = []

	const filteredTailwindColors = getKeys(tailwindColorsFiltered)

	let count = 0

	for (let index = 0; index < objectLength; index++) {
		colors[index] = filteredTailwindColors[count]

		if (filteredTailwindColors.length - 1 === count) {
			count = 0
		} else {
			count++
		}
	}

	return colors
}
