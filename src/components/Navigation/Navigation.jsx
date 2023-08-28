import { useState } from "react";
import { NavigationCategory } from "../";
import { navData } from "../../data/navData";

const Navigation = ({ isOpenHalf }) => {
	const [categoryNumber, setCategoryNumber] = useState(1);

	return (
		<nav className={`primary-nav ${isOpenHalf && "open-half"}`}>
			<ul role="list" className="navlist">
				{navData.map((data) => {
					return (
						<li key={data.id} className="nav__item">
							<NavigationCategory
								classes={categoryNumber === data.id && "active"}
								{...data}
								setCategoryNumber={setCategoryNumber}
								isOpenHalf={isOpenHalf}
							/>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Navigation;
