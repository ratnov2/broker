import React from 'react'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import ContactsCard from './ContactsCard'
import LastestActivity from './LastestActivity'
import MessagesCard from './MessagesCard'
import UserCard from './UserCard'
import { userInfo } from './fakeUser.data'

const Profile: FC = () => {
	return (
		<Layout title='User'>
			<div className='h-full'>
				<h1 className='text-2xl font-bold text-black'>User</h1>
				<UserCard user={userInfo} />
				<div className='flex flex-row gap-8 justify-center items-center flex-wrap'>
					<ContactsCard user={userInfo} />
					<MessagesCard user={userInfo} />
					<LastestActivity />
				</div>
			</div>
		</Layout>
	)
}

export default Profile

{
}
