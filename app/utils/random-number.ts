const randomNumber = (min: number, max: number) => {
	return Math.ceil((max - min) * Math.random())
}

export default randomNumber
