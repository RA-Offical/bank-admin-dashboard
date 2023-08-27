import { transcationData } from "../../data/transactionData";

const TransactionCard = () => {
	return (
		<div className="transcation-card">
			<ul role="list" className="transcation-list">
				{transcationData.map((data) => {
					return (
						<li key={data.id} className="transaction__item">
							<div className="flex align-ic  transaction-info">
								<img
									className="profile-img"
									src={data.image}
									alt={data.name}
								/>

								<div>
									<h3 className="text-small fw-bold">
										{data.name}
									</h3>
									<p className="text-neutral-400">
										{data.date}
									</p>
								</div>

								<p className="transaction__amount">
									$ {data.amount.toFixed(2)}
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
