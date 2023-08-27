import { sprite } from "../../utils/images";
import { budgetData } from "../../data/budgetData";

const BudgetCard = () => {
	return (
		<div className="budget-card">
			<div
				className="flex align-ic justify-btw
             budget-info"
			>
				<p className="text-large fw-semi-bold">Cash</p>
				<p className="text-large">$ {100000}</p>
			</div>

			<div className="bg-primary-400 budget-divison-container">
				<ul role="list" className="budget-list">
					{budgetData.map((data) => {
						const { id, service, amount, type } = data;

						return (
							<li key={id} className="budget__item">
								<div className="flex  budget-category">
									<svg className="icon-sm">
										<use
											xlinkHref={`${sprite}#check`}
										></use>
									</svg>

									<div>
										<h3 className="text-small fw-semi-bold">
											{service}
										</h3>

										<p className="text-small text-neutral-400">
											{type}
										</p>
									</div>

									<p className="text-small budget__amount">
										$ {amount}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default BudgetCard;
