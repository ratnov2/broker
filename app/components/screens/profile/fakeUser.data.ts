import { IUserCard } from './profile.interface'

export const userInfo: IUserCard = {
	userName: 'Rava Avis',
	role: 'Admin',
	address: 'Franklin Avenue Street New York, ABC, 5562 United State',
	email: 'admin@mail.com',
	phone: 123456789,
	totalContacts: 741,
	userContacts: [
		{
			name: 'Samantha William',
			class: 'Class VII-A'
		},
		{
			name: 'Tony Soap',
			class: 'Class VII-A'
		},
		{
			name: 'Karen Hope',
			class: 'Class VII-A'
		},
		{
			name: 'Jordan Nico',
			class: 'Class VII-B'
		},
		{
			name: 'Nadila Adja',
			class: 'Class VII-C'
		}
	],
	userMessages: [
		{
			name: 'Samantha William',
			text: 'Lorem ipsum dolor sit amet...',
			time: '12:45 PM',
			value: 2
		},
		{
			name: 'Tony Soap',
			text: 'Lorem ipsum dolor sit amet...',
			time: '12:45 PM',
			value: 2
		},
		{
			name: 'Karen Hope',
			text: 'Lorem ipsum dolor sit amet...',
			time: '12:45 PM',
			value: 1
		},
		{
			name: 'Jordan Nico',
			text: 'Lorem ipsum dolor sit amet...',
			time: '12:45 PM',
			value: 2
		},
		{
			name: 'Nadila Adja',
			text: 'Lorem ipsum dolor sit amet...',
			time: '12:45 PM',
			value: 1
		}
	]
}
