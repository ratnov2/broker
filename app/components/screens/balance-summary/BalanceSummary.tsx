import Layout from "@/layout/Layout"
//import BalanceStatisticsSummary from "./balance-summary-bottom-section/BalanceStatisticsSummary"
import BalanceSummaryBottomSection from "./balance-summary-bottom-section/BalanceSummaryBottomSection"
import BalanceSummaryTopSection from "./balance-summary-top-section/BalanceSummaryTopSection"


const BalanceSummary = () => {
  return (
    <Layout title="balance-summary">
      <BalanceSummaryTopSection />
      <BalanceSummaryBottomSection />
    </Layout>
  )
}

export default BalanceSummary