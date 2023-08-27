import { transcationData } from "../../data/transactionData";

const TransactionCard = () => {
	return (
		<div className="transcation-card">
			<ul role="list" className="transcation-list">
				{transcationData.map((data) => {
					const { id, name, image, date, amount } = data;

					return (
						<li key={id} className="transaction__item">
							<div className="flex align-ic  transaction-info">
								<img
									className="profile-img"
									src={image}
									alt={name}
								/>

								<div>
									<h3 className="text-small fw-bold">
										{name}
									</h3>
									<p className="text-neutral-400">{date}</p>
								</div>

								<p className="fw-medium transaction__amount">
									$ {amount.toFixed(2)}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TransactionCard;
