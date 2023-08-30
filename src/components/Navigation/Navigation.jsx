import { useState, memo } from "react";
import { NavigationCategory } from "../";
import { navData } from "../../data/navData";
import { useSelector } from "react-redux";

const Navigation = () => {
	const [categoryNumber, setCategoryNumber] = useState(1);
	const { isOpenHalf } = useSelector((store) => store.sidebar);

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
							/>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default memo(Navigation);
