import React, { useState } from "react";
import { person_one } from "../../utils/images";
import { Navigation } from "../";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<aside className="bg-primary-500 flex sidebar">
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
		</aside>
	);
};

export default Sidebar;
