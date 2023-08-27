import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const LoanCard = () => {
	ChartJS.register(ArcElement, Tooltip, Legend);

	const data = {
		labels: ["Savings Target", "Target Reached"],
		datasets: [
			{
				data: [50, 50],
				backgroundColor: ["#473b33", "#fe6c00"],
				hoverOffset: 0,
				borderColor: ["#473b33", "#fe6c00"],
			},
		],
	};

	const doughnetText = {
		id: "doughnetText",
		beforeDatasetDraw(chart, args, pluginOptions) {
			const { ctx } = chart;
			const { x: xCenter, y: yCenter } = chart.getDatasetMeta(0).data[0];
			ctx.save();
			ctx.fillStyle = "#fff";
			ctx.font = "bold 22px 'Bai Jamjuree'";
			ctx.textAlign = "center";
			ctx.fillText("50%", xCenter, yCenter);
		},
	};

	return (
		<div className="flex align-ic loan-card">
			<div className="doughnet-chart-wrapper">
				<Doughnut data={data} options={{}} plugins={[doughnetText]} />
			</div>

			<div className="loan-information">
				<div className="loan-item">
					<h3 className="fw-medium text-accent-white">
						Savings Target
					</h3>
					<p>$ 500,000</p>
				</div>

				<div className="loan-item">
					<h3 className="fw-medium text-accent-white">
						Target Reached
					</h3>

					<p>$ 250,000</p>
				</div>
			</div>
		</div>
	);
};

export default LoanCard;
