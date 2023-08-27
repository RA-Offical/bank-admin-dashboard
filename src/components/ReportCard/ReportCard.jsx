import {
	Chart as ChartJS,
	LinearScale,
	BarElement,
	ArcElement,
	CategoryScale,
	Legend,
	Tooltip,
} from "chart.js";

import { Bar } from "react-chartjs-2";

const ReportCard = () => {
	ChartJS.register(
		ArcElement,
		BarElement,
		CategoryScale,
		LinearScale,
		Legend,
		Tooltip
	);

	// data for bar chart

	const data = {
		labels: ["Janurary", "Feburary", "March", "April"],
		datasets: [
			{
				label: "Transaction",
				data: [65, 59, 80, 81],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(255, 159, 64, 0.2)",
					"rgba(255, 205, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
				],
				borderColor: [
					"rgb(255, 99, 132)",
					"rgb(255, 159, 64)",
					"rgb(255, 205, 86)",
					"rgb(75, 192, 192)",
				],
				borderWidth: 1,
				barThickness: 40,
			},
		],
	};

	return (
		<div className="report-card">
			<div className="bar-chart-wrapper">
				<Bar data={data} options={{}} />
			</div>
		</div>
	);
};

export default ReportCard;
