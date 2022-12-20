interface balanceStats {
	title: string;
	currentNum: number;
	maxNum: number;
	color: string;
}

const BalanceStats = ({title, currentNum, maxNum, color}: balanceStats) => {
	return (
		<div className={`flex items-center border-2 border-[#8E8EA1] rounded-2xl p-3.5`}>
			<div className={'mr-5'}>
				50%
			</div>
			
			<div>
				<h4 className={'font-semibold text-1.5xl'}>{title}</h4>
				<p>${currentNum} / <span style={{color: color}}>from ${maxNum}</span></p>
			</div>
		</div>
	)
}

export default BalanceStats;