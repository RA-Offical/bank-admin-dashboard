import { sprite } from "../../utils/images";

const Header = () => {
	return (
		<header className="flex align-ic justify-btw primary-header">
			{/* left section */}
			<div className="flex align-ic primary-header-left">
				{/* icon */}
				<button className="btn btn--icon btn--icon-primary">
					<svg className="icon-sm menu--icon">
						<use xlinkHref={`${sprite}#menu`}></use>
					</svg>
				</button>

				{/* page name */}
				<p className="text-medium page-name">Home</p>
			</div>

			{/* right section */}
			<div className="flex align-ic primary-header-right">
				<button className="btn btn--icon btn--icon-primary">
					<svg className="icon">
						<use xlinkHref={`${sprite}#search`}></use>
					</svg>
				</button>

				<button className="btn btn--icon btn--icon-primary">
					<svg className="icon">
						<use xlinkHref={`${sprite}#bell`}></use>
					</svg>
				</button>
			</div>
		</header>
	);
};

export default Header;
