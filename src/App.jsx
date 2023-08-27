import {
	BalanceCard,
	BudgetCard,
	CardTemplate,
	FinancialCard,
	Header,
	ReportCard,
	SavingCard,
	Sidebar,
	TransactionCard,
} from "./components";
import LoanCard from "./components/LoanCard/LoanCard";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";

function App() {
	return (
		<div className="app">
			<div className="flex">
				<Sidebar />

				<div className="content">
					<Header />

					<main>
						<div className="main-content">
							<CardTemplate
								title={"Budget"}
								cardBody={<BudgetCard />}
							/>

							<CardTemplate
								title={"Financial Advice"}
								cardBody={<FinancialCard />}
							/>

							<CardTemplate
								title={"Saving"}
								cardBody={<SavingCard />}
							/>

							<CardTemplate
								title={"Report"}
								cardBody={<ReportCard />}
							/>
							<CardTemplate
								title={"Loans"}
								cardBody={<LoanCard />}
							/>
							<CardTemplate
								title={"Card"}
								cardBody={<BalanceCard />}
							/>

							<CardTemplate
								title={"All Transactions"}
								cardBody={<TransactionCard />}
							/>

							<CardTemplate
								title={"Subscriptions"}
								cardBody={<SubscriptionCard />}
							/>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
