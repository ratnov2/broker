import Layout from "@/layout/Layout"
import BalanceStatisticsSummary from "./balanceSummaryBottomSection/BalanceStatisticsSummary"
import BalanceSummaryBottomSection from "./balanceSummaryBottomSection/BalanceSummaryBottomSection"
import BalanceSummaryTopSection from "./balanceSummaryTopSection/BalanceSummaryTopSection"


const BalanceSummary = () => {
  return (
    <Layout title="balance-summary">
      <BalanceSummaryTopSection />
      <BalanceSummaryBottomSection />
    </Layout>
  )
}

export default BalanceSummary