import cn from 'clsx';
import { FC } from 'react';

//import styles from '../Sidebar.module.scss';

import LatestInvoiceActions from './LatestInvoicesActions/LatestInvoicesActions';
import { ILatestInvoiceTableItem } from './invoice-table.interface';


const LatestInvoiceTableItem: FC<ILatestInvoiceTableItem> = ({printHandler, tableItem}) => {
	return <div className={''}>
			{tableItem.items.map(value => (
				<div key={value}>{value}</div>
			))}
		<LatestInvoiceActions printHandler={printHandler} />
		</div>
	
}

export default LatestInvoiceTableItem