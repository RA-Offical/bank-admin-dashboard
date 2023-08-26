import { useState } from "react";
import { NavigationCategory } from "../";
import { navData } from "../../data/navData";

const Navigation = () => {
	const [categoryNumber, setCategoryNumber] = useState(1);

	return (
		<nav className="primary-nav">
			<ul role="list" className="navlist">
				{navData.map((data) => {
					return (
						<li key={data.id} className="nav__item">
							<NavigationCategory
								classes={categoryNumber === data.id && "active"}
								{...data}
								setCategoryNumber={setCategoryNumber}
							/>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
