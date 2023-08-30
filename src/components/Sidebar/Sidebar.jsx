import { useState, useRef, useEffect } from "react";
import { person_one, sprite } from "../../utils/images";
import { Navigation } from "../";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpenHalf, setIsOpen } from "../../features/sidebarSlice";

const Sidebar = () => {
	const sidebarContainerRef = useRef();
	const dispatch = useDispatch();
	const { isOpen, isOpenHalf } = useSelector((store) => store.sidebar);

	// when application loads check if user preference is present
	useEffect(() => {
		const sidebarPref = window.localStorage.getItem("sidebarPref");
		if (!sidebarPref) return;

		const { isOpen, isOpenHalf } = JSON.parse(sidebarPref);

		console.log(typeof isOpen, typeof isOpenHalf);

		dispatch(setIsOpen(isOpen));
		dispatch(setIsOpenHalf(isOpenHalf));
	}, []);

	// storing user sidebar preference
	useEffect(() => {
		window.localStorage.setItem(
			"sidebarPref",
			JSON.stringify({ isOpen, isOpenHalf })
		);
	}, [isOpen, isOpenHalf]);

	// useEffect for closing sidebar when click happen on outside
	useEffect(() => {
		sidebarContainerRef.current.addEventListener("click", (e) => {
			const target = e.target;
			if (!target.matches(".sidebar, .sidebar *")) {
				dispatch(setIsOpen(false));
			}
		});
	}, []);

	return (
		<aside
			className={`sidebar-wrapper ${isOpen && "open"}`}
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
							dispatch(setIsOpenHalf(true));
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
							dispatch(setIsOpenHalf(false));
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
				<Navigation />
			</div>
		</aside>
	);
};

export default Sidebar;
