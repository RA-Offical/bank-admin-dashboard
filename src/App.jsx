import { BalanceCard, CardTemplate, Header, Sidebar } from "./components";

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
								title={"Card"}
								cardBody={<BalanceCard />}
							/>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
