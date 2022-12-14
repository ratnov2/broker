import cn from 'classnames'
import React, { FC } from 'react'

import { TypesCardEars } from './card-ears.interface'

const CardEars: FC<TypesCardEars> = ({ bg, position }) => {
	return (
		<div
			className={cn(
				`h-60 w-14 mt-10 ${bg}`,
				position === 'left' && 'rounded-l-2xl',
        position === 'right' && 'rounded-r-2xl'
			)}
		></div>
	)
}

export default CardEars
