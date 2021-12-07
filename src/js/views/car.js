import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { starWarsApiFetch } from "../views/people";
import useSWR from "swr";

import ATAT from "../../img/atat.png";
import ATST from "../../img/atst.jpg";
import Landspeeder from "../../img/landspeeder.jpeg";
import SailBarge from "../../img/SailBarge.jpeg";
import Sandy from "../../img/sandy.png";
import SkyHopper from "../../img/skyhopper.png";
import SnowSpeeder from "../../img/snowspeeder.jpg";
import StormCloudCar from "../../img/stormCloudCar.png";
import TieF from "../../img/tie-fighter.jpeg";
import TieB from "../../img/tieBomber.jpeg";

export const Car = () => {
	const params = useParams();
	const { data } = useSWR("/api/people/" + params.id, starWarsApiFetch);

	const images = {
		"1": Sandy,
		"2": Landspeeder,
		"3": SkyHopper,
		"4": TieF,
		"5": SnowSpeeder,
		"6": ATAT,
		"7": TieB,
		"8": ATST,
		"9": StormCloudCar,
		"10": SailBarge
	};

	return (
		<div className="jumbotron">
			<div className="card mb-3" style={{ maxWidth: 540 }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={
								data && data.result.properties.name === "Sand Crawler" ? (
									<img src={images[1]} />
								) : data && data.result.properties.name === "X-34 landspeeder" ? (
									<img src={images[2]} />
								) : data && data.result.properties.name === "T-16 skyhopper" ? (
									<img src={images[3]} />
								) : data && data.result.properties.name === "TIE/LN starfighter" ? (
									<img src={images[4]} />
								) : data && data.result.properties.name === "Snowspeeder" ? (
									<img src={images[5]} />
								) : data && data.result.properties.name === "AT-AT" ? (
									<img src={images[6]} />
								) : data && data.result.properties.name === "TIE bomber" ? (
									<img src={images[7]} />
								) : data && data.result.properties.name === "AT-ST" ? (
									<img src={images[8]} />
								) : data && data.result.properties.name === "Storm IV Twin-Pod cloud car" ? (
									<img src={images[9]} />
								) : data && data.result.properties.name === "Sail barge" ? (
									<img src={images[10]} />
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
							<p className="card-text">These are all Star Wars vehicles.</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Car.propTypes = {
	name: PropTypes.string,
	height: PropTypes.string,
	birth_year: PropTypes.string
};
