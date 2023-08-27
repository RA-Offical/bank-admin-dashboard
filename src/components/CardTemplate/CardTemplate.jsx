import { sprite } from "../../utils/images";

const CardTemplate = ({ title, cardBody, style }) => {
	return (
		<article style={style} className="card">
			<header className="flex align-ic justify-btw card-header">
				<h2 className="fw-medium card__title">{title}</h2>
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
