import { FC } from 'react'

const CardInfoItem: FC<{ title: string; value: string }> = props => {
	return (
		<div>
			<h4 className={'card-details__title'}>{props.title}</h4>
			<p className={'card-details__value'}>{props.value}</p>
		</div>
	)
}

export default CardInfoItem
