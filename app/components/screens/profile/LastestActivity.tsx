import React from 'react'

const LastestActivity = () => {
	const activityData = [
		{
			user: 'Karen Hope',
			title: 'send money',
			value: '"150"',
			color: 'orange',
			date: '2 March 2021, 13:45 PM'
		},
		{
			user: 'Samantha William',
			title: ' add new 4 attached files on task',
			value: '"Photo’s Assets"',
			color: 'orange',
			date: '2 March 2021, 13:45 PM'
		},
		{
			user: 'Tony Soap',
			title: 'invite you in task',
			value: 'Wireframing',
			color: 'purple',
			date: '2 March 2021, 13:45 PM'
		},
		{
			user: 'Samantha William',
			title: 'created new',
			value: 'Task',
			color: 'red',
			date: '2 March 2021, 13:45 PM'
		},
		{
			user: 'Samantha William',
			title: ' add new 4 attached files on task',
			value: '"Photo’s Assets"',
			color: 'orange',
			date: '2 March 2021, 13:45 PM'
		},
		{
			user: 'Samantha William',
			title: 'created new',
			value: 'Task',
			color: 'red',
			date: '2 March 2021, 13:45 PM'
		}
	]
	return (
		<div className='flex flex-col bg-white mt-[54px] rounded-3xl w-[396px] p-8 justify-between'>
			<div className='flex flex-col '>
				<h1 className='font-bold text-2xl'>Lastest Activity</h1>
				<div className='flex flex-col mt-8'>
					{activityData.map(data => (
						<div className='flex flex-row mb-8 '>
							<div className=' bg-light-gray w-10 h-10 rounded-full'></div>
							<div className='flex flex-col ml-4 text-[14px]'>
								<div className=' whitespace-normal'>
									<b>{data.user}</b> {data.title}{' '}
									<b className={`text-${data.color}`}>
										{data.value}
									</b>
								</div>
								<span className='text-gray font-normal'>
									{data.date}
								</span>
							</div>
						</div>
					))}

					<button className='bg-[#F0EFFC]  rounded-3xl text-center py-2 text-purple font-bold hover:outline hover:outline-1 hover:outline-purple'>
						View More
					</button>
				</div>
			</div>
		</div>
	)
}

export default LastestActivity
