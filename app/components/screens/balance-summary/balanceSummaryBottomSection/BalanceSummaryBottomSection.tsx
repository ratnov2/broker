import BalanceStatisticsSummary from "./BalanceStatisticsSummary"
import OutcomeCategoriesSummary from "./OutcomeCategoriesSummary"

const BalanceSummaryBottomSection = () => {
  return (
    <div className="flex h-52 mt-10">
      <BalanceStatisticsSummary />
      <OutcomeCategoriesSummary />
    </div>
  )
}

export default BalanceSummaryBottomSection