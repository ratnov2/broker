export const tailwindColors = {
	purple: '#6160DC',
	'light-blue': '#03DAF2',
	orange: '#FFB74A',
	green: '#00A389',
	black: '#22242C',
	white: '#ffffff',
	red: '#FF4A55',
	gray: '#8E8EA1',
	'light-gray': '#F5F5F5'
}

export const tailwindColorsFiltered = {
	purple: '#6160DC',
	'light-blue': '#03DAF2',
	green: '#00A389',
	red: '#FF4A55',
	orange: '#FFB74A',
	gray: '#8E8EA1',
	black: '#22242C'
}

export type ITailwindColorsFiltered = keyof typeof tailwindColorsFiltered

export type tailwindColorsType = keyof typeof tailwindColors