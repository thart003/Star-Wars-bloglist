import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { starWarsApiFetch } from "../views/people";
import useSWR from "swr";

import Alderaan from "../../img/Alderaan.jpeg";
import Bespin from "../../img/bespin.jpeg";
import Coruscant from "../../img/Coruscant.jpeg";
import Dagobah from "../../img/dagobah.jpeg";
import Endor from "../../img/Endor.jpeg";
import Hoth from "../../img/hoth.jpeg";
import Kamino from "../../img/Kamino.jpeg";
import Naboo from "../../img/Naboo.jpeg";
import Tatooine from "../../img/Tatooine.jpeg";
import Yavin from "../../img/Yavin.jpeg";

export function BigRock() {
	const params = useParams();
	const { data } = useSWR("/api/planets/" + params.id, starWarsApiFetch);

	const images = {
		"1": Tatooine,
		"2": Alderaan,
		"3": Yavin,
		"4": Hoth,
		"5": Dagobah,
		"6": Bespin,
		"7": Endor,
		"8": Naboo,
		"9": Coruscant,
		"10": Kamino
	};

	return (
		<div className="jumbotron">
			<div className="card mb-3" style={{ maxWidth: 540 }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={
								data && data.result.properties.name === "Tatooine" ? (
									images[1]
								) : data && data.result.properties.name === "Alderaan" ? (
									images[2]
								) : data && data.result.properties.name === "Yavin IV" ? (
									images[3]
								) : data && data.result.properties.name === "Hoth" ? (
									images[4]
								) : data && data.result.properties.name === "Dagobah" ? (
									images[5]
								) : data && data.result.properties.name === "Bespin" ? (
									images[6]
								) : data && data.result.properties.name === "Endor" ? (
									images[7]
								) : data && data.result.properties.name === "Naboo" ? (
									images[8]
								) : data && data.result.properties.name === "Coruscant" ? (
									images[9]
								) : data && data.result.properties.name === "Kamino" ? (
									images[10]
								) : (
									<h1>No Image</h1>
								)
							}
							className="img-fluid rounded-start"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{data && data.result.properties.name}</h5>
							<p className="card-text">These are all Star Wars planets.</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

BigRock.propTypes = {
	name: PropTypes.string,
	height: PropTypes.string,
	birth_year: PropTypes.string
};
