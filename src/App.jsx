import { Header, Sidebar } from "./components";

function App() {
	return (
		<div className="app">
			<div className="flex">
				<Sidebar />

				<div className="content">
					<Header />
				</div>
			</div>
		</div>
	);
}

export default App;
