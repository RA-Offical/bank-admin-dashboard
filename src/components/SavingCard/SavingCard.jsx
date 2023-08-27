import { person_three } from "../../utils/images";
const SavingCard = () => {
	return (
		<div className="saving-card">
			<ul role="list" className="saving-list">
				<li className="saving__item">
					<div className="flex align-ic saving-notification">
						<img
							className="profile-img"
							src={person_three}
							alt=""
						/>
						<h3 className="text-small fw-medium">
							Pay kid bro's fees
						</h3>
						<p className="saving__amount">$ 25000.00</p>
					</div>
				</li>
			</ul>

			<div className="flex text-small saving-lend-container">
				<div className="bg-primary-300 badge">Date taken 23/03/12</div>
				<div className="bg-primary-300 badge">
					Amount left $ {(40000).toFixed(2)}
				</div>
			</div>

			<div className="saving-progress-container">
				<progress
					className="saving__progress"
					value={"40"}
					max={"100"}
				></progress>
			</div>
		</div>
	);
};

export default SavingCard;
