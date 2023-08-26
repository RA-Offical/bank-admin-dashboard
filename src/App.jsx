import { Sidebar } from "./components";

function App() {
	return (
		<div className="app">
			<div className="flex">
				<Sidebar />

				<main>
					<h2>Main Content</h2>
				</main>
			</div>
		</div>
	);
}

export default App;
