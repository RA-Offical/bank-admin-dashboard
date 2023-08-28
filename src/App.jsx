import { useState, useEffect } from "react";
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
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		// set the sidebar preference
		const sidebarPref = window.localStorage.getItem("sidebarPref");
		if (sidebarPref) {
			setIsOpen(JSON.parse(sidebarPref).isOpen);
		}
	}, []);

	useEffect(() => {
		// save the user sidebar preference
		window.localStorage.setItem("sidebarPref", JSON.stringify({ isOpen }));
	}, [isOpen]);

	return (
		<div className="app">
			<div className="flex container">
				<Sidebar isOpen={isOpen} />

				<div className="content">
					<Header setIsOpen={setIsOpen} isOpen={isOpen} />

					<main>
						<div className="main-content">
							{/* balance card */}
							<CardTemplate
								style={{ gridArea: "balance-card" }}
								title={"Card"}
								cardBody={<BalanceCard />}
							/>

							{/* transaction card */}
							<CardTemplate
								style={{ gridArea: "transaction-card" }}
								title={"All Transactions"}
								cardBody={<TransactionCard />}
							/>

							{/* report card */}
							<CardTemplate
								style={{ gridArea: "report-card" }}
								title={"Report"}
								cardBody={<ReportCard />}
								classes={"report-card-wrapper"}
							/>

							{/* budget card */}
							<CardTemplate
								style={{ gridArea: "budget-card" }}
								title={"Budget"}
								cardBody={<BudgetCard />}
							/>

							{/* subscription card */}
							<CardTemplate
								style={{ gridArea: "subscription-card" }}
								title={"Subscriptions"}
								cardBody={<SubscriptionCard />}
							/>

							{/* saving card */}
							<CardTemplate
								style={{ gridArea: "saving-card" }}
								title={"Saving"}
								cardBody={<SavingCard />}
							/>

							{/* loan card */}
							<CardTemplate
								style={{ gridArea: "loan-card" }}
								title={"Loans"}
								cardBody={<LoanCard />}
							/>

							{/* financial card */}
							<CardTemplate
								style={{ gridArea: "financial-card" }}
								title={"Financial Advice"}
								cardBody={<FinancialCard />}
							/>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
