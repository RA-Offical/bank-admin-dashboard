import { sprite } from "../../utils/images";

const CardTemplate = ({ title, cardBody }) => {
	return (
		<article className="card">
			<header className="flex align-ic justify-btw card-header">
				<h2 className=" card__title">Cards</h2>
				<button className="btn btn--icon btn--icon-primary">
					<svg className="icon-md">
						<use xlinkHref={`${sprite}#plus`}></use>
					</svg>
				</button>
			</header>

			{/* card body */}
			{cardBody}
		</article>
	);
};

export default CardTemplate;
