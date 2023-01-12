import { FC } from 'react'

const RecipientRibbon: FC = () => {
	return (
		<div>
			<h2 className='text-xl font-bold mb-8'>Recent Recipient</h2>
			<div className='flex space-x-4'>
				<div className='flex flex-col items-center'>
					<div className='rounded-full w-16 h-16 bg-purple'></div>
					<div>Jordan</div>
				</div>
				<div className='flex flex-col items-center'>
					<div className='rounded-full w-16 h-16 bg-purple'></div>
					<div>Tony</div>
				</div>
				<div className='flex flex-col items-center'>
					<div className='rounded-full w-16 h-16 bg-purple'></div>
					<div>Karen</div>Trans
				</div>
			</div>
		</div>
	)
}

export default RecipientRibbon
