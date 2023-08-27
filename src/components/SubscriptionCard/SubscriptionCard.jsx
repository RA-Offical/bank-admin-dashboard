import { sprite } from "../../utils/images";
import { subscriptionData } from "../../data/subscriptionData";

const SubscriptionCard = () => {
	return (
		<div className="subscription-card">
			<ul role="list" className="subscription-list">
				{subscriptionData.map((data) => {
					const { id, amount, service, date } = data;
					return (
						<li key={id} className="subscription__item">
							<div className="flex align-ic subscription-info-container">
								<div className="flex align-ic text-accent-white  subscription-icon-container">
									<svg className="icon">
										<use
											xlinkHref={`${sprite}#alert`}
										></use>
									</svg>
								</div>

								<div className="flex text-neutral-400 subscription-info">
									<p className="text-neutral-200 fw-semi-bold text-small">
										{service}
									</p>{" "}
									due <p>{date}</p>
								</div>

								<p className="fw-semi-bold subscription__price">
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

export default SubscriptionCard;
