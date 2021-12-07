import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { starWarsApiFetch } from "../views/people";
import useSWR from "swr";
import C3PO from "../../img/c3po.jpeg";
import Owen from "../../img/Owen.jpeg";
import Beru from "../../img/Beru.jpeg";
import Biggs from "../../img/biggs.jpeg";
import Luke from "../../img/Luke.jpeg";
import ObiWan from "../../img/obi-wan.jpeg";
import Leia from "../../img/princess.jpeg";
import R5D4 from "../../img/r4d5.jpeg";
import Vader from "../../img/Vader.jpg";
import R2D2 from "../../img/R2D2.jpeg";

export const Person = () => {
	const params = useParams();
	const { data } = useSWR("/api/people/" + params.id, starWarsApiFetch);

	const placeholder = "https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg";

	const images = {
		"1": Luke,
		"2": R2D2,
		"3": C3PO,
		"4": Vader,
		"5": Leia,
		"6": Owen,
		"7": Beru,
		"8": R5D4,
		"9": Biggs,
		"10": ObiWan
	};

	return (
		<div className="jumbotron">
			<h1>{data && data.result.properties.name}</h1>
			{data && data.result.properties.name === "Luke Skywalker" ? (
				<img src={images[1]} />
			) : data && data.result.properties.name === "R2-D2" ? (
				<img src={images[2]} />
			) : data && data.result.properties.name === "C-3PO" ? (
				<img src={images[3]} />
			) : data && data.result.properties.name === "Darth Vader" ? (
				<img src={images[4]} />
			) : data && data.result.properties.name === "Leia Organa" ? (
				<img src={images[5]} />
			) : data && data.result.properties.name === "Owen Lars" ? (
				<img src={images[6]} />
			) : data && data.result.properties.name === "Beru Whitesun lars" ? (
				<img src={images[7]} />
			) : data && data.result.properties.name === "R5-D4" ? (
				<img src={images[8]} />
			) : data && data.result.properties.name === "Biggs Darklighter" ? (
				<img src={images[9]} />
			) : data && data.result.properties.name === "Obi-Wan Kenobi" ? (
				<img src={images[10]} />
			) : (
				<h1>No Image</h1>
			)}
		</div>
	);
};

Person.propTypes = {
	name: PropTypes.string,
	height: PropTypes.string,
	birth_year: PropTypes.string
};
