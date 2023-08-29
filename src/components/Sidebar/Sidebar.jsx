import { useState, useRef, useEffect } from "react";
import { person_one, sprite } from "../../utils/images";
import { Navigation } from "../";

const Sidebar = ({ isOpen, setIsOpen }) => {
	const [isOpenHalf, setIsOpenHalf] = useState(true);
	const sidebarContainerRef = useRef();

	// useEffect for handling
	useEffect(() => {
		sidebarContainerRef.current.addEventListener("click", (e) => {
			const target = e.target;
			if (!target.matches(".sidebar, .sidebar *")) {
				setIsOpen(false);
			}
		});
	}, []);

	return (
		<aside
			className={`sidebar-wrapper  ${isOpen && "open"}`}
			ref={sidebarContainerRef}
		>
			<div
				className={`bg-primary-500 flex sidebar ${
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
						<svg
							className={`icon icon--arrow-left ${
								isOpenHalf && "hidden"
							}`}
						>
							<use xlinkHref={`${sprite}#arrow`}></use>
						</svg>
					</button>
					<button
						className="btn btn--icon"
						onClick={() => {
							setIsOpenHalf(false);
						}}
					>
						<svg
							className={`icon icon--arrow-right ${
								!isOpenHalf && "hidden"
							}`}
						>
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
			</div>
		</aside>
	);
};

export default Sidebar;
