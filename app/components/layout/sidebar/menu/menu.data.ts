import { AiOutlineCopy, AiOutlineCreditCard, AiOutlineFileAdd, AiOutlineHome, AiOutlineMoneyCollect, AiOutlineTransaction, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai';



import { IMenuItem } from './menu.interface';


export const menu: IMenuItem[] = [
	{
		name: 'Dashboard',
		icon: AiOutlineHome,
		link: '/'
	},
	{
		name: 'Balance',
		icon: AiOutlineMoneyCollect,
		link: '/balance'
	},
	{
		name: 'Invoices',
		icon: AiOutlineCopy,
		link: '/invoices'
	},
	{
		name: 'Create Invoice',
		icon: AiOutlineFileAdd,
		link: '/add-new-invoice'
	},
	{
		name: 'Cards',
		icon: AiOutlineCreditCard,
		link: '/cards'
	},
	{
		name: 'Transactions',
		icon: AiOutlineTransaction,
		link: '/transactions'
	},
	{
		name: 'Payment Sources',
		icon: AiOutlineUsergroupAdd,
		link: '/payment-sources'
	},
	{
		name: 'Settings',
		icon: AiOutlineSetting,
		link: '/settings'
	}
]