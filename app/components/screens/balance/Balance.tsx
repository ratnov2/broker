import {FC, useState} from 'react'
import Layout from '@/layout/Layout'

const Balance: FC = () => {
	const [balance, setBalance] = useState('12,345,789');
	
	return (
		<Layout title='Balance'>
			<div className=''>
				<h1 className={'font-bold text-3xl'}>Balance</h1>
				
				<div className={'flex justify-between mt-5'}>
					<div className={'balance-card'}>
						<h3 className={'font-normal text-1xl text-[#8E8EA1]'}>My Balance</h3>
						<p className={'text-3xl font-bold mt-1'}>{`$ ${balance}`}</p>
						
						<div>
							Line
						</div>
						
						<div className={'flex items-center'}>
							<div>
								<h4>Card Holder</h4>
								<p>Rara Avis</p>
							</div>
							
							<div>
								<h4>Valid Thru</h4>
								<p>03/21</p>
							</div>
							
							<p>**** **** **** 1234</p>
						</div>
						
						<div className={'flex flex-wrap items-center justify-between'}>
							<div className={'balance-stats'}>
								<div>
									50%
								</div>
								
								<div>
									<h4>Working Hard</h4>
									<p>$500 / from $1000</p>
								</div>
							</div>
							
							<div className={'balance-stats'}>
								<div>
									50%
								</div>
								
								<div>
									<h4>Working Hard</h4>
									<p>$500 / from $1000</p>
								</div>
							</div>
							
							<div className={'balance-stats'}>
								<div>
									50%
								</div>
								
								<div>
									<h4>Working Hard</h4>
									<p>$500 / from $1000</p>
								</div>
							</div>
							
							<div className={'balance-stats'}>
								<div>
									50%
								</div>
								
								<div>
									<h4>Working Hard</h4>
									<p>$500 / from $1000</p>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Balance
