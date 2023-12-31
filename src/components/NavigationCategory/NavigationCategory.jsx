import { useSelector } from "react-redux";
import { sprite } from "../../utils/images";

const NavigationCategory = ({
	classes,
	title,
	icon,
	id,
	setCategoryNumber,
}) => {
	const { isOpenHalf } = useSelector((store) => store.sidebar);

	return (
		<a
			href="#"
			className={`flex align-ic navigation-category ${classes} ${
				isOpenHalf && "open-half"
			}`}
			onClick={() => setCategoryNumber(id)}
		>
			{/* icon */}
			<svg className="navigation-category__icon">
				<use xlinkHref={`${sprite}#${icon}`}></use>
			</svg>

			{/* title */}
			<p className="navigation-category__title">{title}</p>
		</a>
	);
};

export default NavigationCategory;
