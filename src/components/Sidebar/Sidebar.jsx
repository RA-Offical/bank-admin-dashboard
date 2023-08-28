import { useState } from "react";
import { person_one, sprite } from "../../utils/images";
import { Navigation } from "../";

const Sidebar = ({ isOpen }) => {
	const [isOpenHalf, setIsOpenHalf] = useState(false);

	return (
		<aside
			className={`bg-primary-500 flex sidebar ${isOpen && "open"} ${
				isOpenHalf && "open-half"
			}`}
		>
			<div className="flex align-ic justify-btw sidebar-controller-container">
				<button
					className="btn btn--icon"
					onClick={() => {
						setIsOpenHalf(true);
					}}
				>
					<svg className={`icon icon--arrow-left`}>
						<use xlinkHref={`${sprite}#arrow`}></use>
					</svg>
				</button>
				<button
					className="btn btn--icon"
					onClick={() => {
						setIsOpenHalf(false);
					}}
				>
					<svg className="icon icon--arrow-right">
						<use xlinkHref={`${sprite}#arrow`}></use>
					</svg>
				</button>
			</div>

			{/* sidebar header for account holder information */}
			<header className="flex align-ic sidebar-header">
				<img
					className="profile-img"
					src={person_one}
					alt="profile image"
				/>

				<p className="fw-medium text-large account-holder-username">
					Rashid Ameer
				</p>
			</header>

			{/* navigation area */}
			<Navigation isOpenHalf={isOpenHalf} />
		</aside>
	);
};

export default Sidebar;
