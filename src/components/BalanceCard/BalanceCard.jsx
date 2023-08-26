import React from "react";

const BalanceCard = () => {
	return (
		<div className="balance-card">
			<h3 className="text-small text-accent-white fw-medium balance-card__title">
				Balance
			</h3>

			<p className="text-large fw-semi-bold balance-card__amount ">
				$ 20,000
			</p>

			<p className="flex balance-card-number">
				<span className="balance-card__hidden-number">
					**** **** ****
				</span>{" "}
				<span>4783</span>
			</p>

			<div className="flex align-ic justify-btw balance-card-icon-container">
				<div className="balance-card-expire-date">
					<h3 className="text-small fw-medium">Expires</h3>
					<p className="text-accent-white">12/22</p>
				</div>

				<div className="flex card-logo-container">
					<div className="card-logo"></div>
					<div className="card-logo"></div>
				</div>
			</div>
		</div>
	);
};

export default BalanceCard;
