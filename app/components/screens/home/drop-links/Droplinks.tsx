import Image from 'next/image'

import style from './DropLinks.module.scss'
import { DropLinksData } from './drop-links.data'

const DropLinks = () => {
	return (
		<div className={style.dropLinks}>
			{DropLinksData.map(el => (
				<div className={style.element} key={el.head}>
					<Image src={el.img} width={70} height={70} alt='img1' />
					<div>
						<h5>{el.head}</h5>
						<p>{el.title}</p>
					</div>
				</div>
			))}
		</div>
	)
}
export default DropLinks
